import bcrypt from 'bcrypt'
import { asyncHandler } from '../utils/asyncHandler.js'
import { Student } from '../models/StudProfile.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'





const loginUser = asyncHandler(async (req, res) => {
    const { studentID, password } = req.body;

    if (!studentID || !password) {
        throw new ApiError(400, 'All Fields are required.')
    }

    const ExistedUser = await Student.findOne({
        "AcademicDetails.StudentID": studentID
    });
    if (!ExistedUser) {
        throw new ApiError(400, "User doesn't exist.")
    }

    const isPassMatch = await ExistedUser.isPasswordCorrect(password)
    if (!isPassMatch) {
        throw new ApiError(400, "Incorrect Password")
    }

    const loginUser = await Student.findById(ExistedUser._id).select('-password')

    return res.status(200)
        .json(new ApiResponse(200, { user: loginUser }, 'User loggin successfully!'))
})


const registerUser = asyncHandler(async (req, res) => {

    const {
        personalDetails,
        academicDetails,
        contactInformation,
        password
    } = req.body;

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

    const createdUser = await Student.findById(user._id)
        .select("-password");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering student.");
    }

    return res.status(201).json(
        new ApiResponse(
            201,
            { user: createdUser },
            "Student registered successfully."
        )
    );
});



export { loginUser, registerUser }