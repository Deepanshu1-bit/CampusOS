import bcrypt from 'bcrypt'
import { asyncHandler } from '../utils/asyncHandler.js'
import { Student } from '../models/StudProfile.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'



const generateAccessAndRefreshToken = async (studentId) => {
    try {
        const student = await Student.findById(studentId)
        const accessToken = await student.generateAccessToken()
        const refreshToken = await student.generateRefreshToken()

        student.refreshToken = refreshToken

        await student.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }

    } catch (error) {
        console.log("Actual Token Error:", error);

        throw new ApiError(500, 'Something went wrong while generating refresh and access token!!')
    }
}

const loginStudent = asyncHandler(async (req, res) => {
    const { studentID, password } = req.body;

    if (!studentID || !password) {
        throw new ApiError(400, 'All Fields are required.')
    }

    const ExistedUser = await Student.findOne({
        "academicDetails.studentID": studentID
    });
    if (!ExistedUser) {
        throw new ApiError(400, "User doesn't exist.")
    }

    const isPassMatch = await ExistedUser.isPasswordCorrect(password)
    if (!isPassMatch) {
        throw new ApiError(400, "Incorrect Password")
    }

    const { refreshToken, accessToken } = await generateAccessAndRefreshToken(ExistedUser._id)

    const loginUser = await Student.findById(ExistedUser._id).select('-password -refreshToken')

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .cookie('refreshToken', refreshToken, options)
        .cookie('accessToken', accessToken, options)
        .json(new ApiResponse(200, { user: loginUser, accessToken, refreshToken }, 'User loggin successfully!'))
})

const registerStudent = asyncHandler(async (req, res) => {

    const { personalDetails, academicDetails, contactInformation, password } = req.body;

    const studentID = academicDetails?.studentID;

    if (!studentID || !password) {
        throw new ApiError(400, "Student ID and password are required.");
    }

    const existingUser = await Student.findOne({
        "academicDetails.studentID": studentID
    });

    if (existingUser) {
        throw new ApiError(409, "Student already exists. Please login.");
    }

    const user = await Student.create({
        personalDetails,
        academicDetails,
        contactInformation,
        password
    });


    const { refreshToken, accessToken } = await generateAccessAndRefreshToken(user._id)

    const createdUser = await Student.findById(user._id)
        .select("-password");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering student.");
    }
    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(201)
        .cookie("RefreshToken", refreshToken, options)
        .cookie("AccessToken", accessToken, options)
        .json(new ApiResponse(201, { user: createdUser }, "Student registered successfully."));
});

const dashboard = asyncHandler(async (req, res) => {
    return res.status(200)
        .json(new ApiResponse(200, req.user, 'Student fetch successfully.'))
})


export { loginStudent, registerStudent, dashboard }