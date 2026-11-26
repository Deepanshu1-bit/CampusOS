import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const StudentProfileSchema = new Schema(
    {
        personalDetails: {
            fullName: {
                type: String,
                required: true,
                trim: true
            },
            gender: {
                type: String,
                enum: ["Male", "Female", "Other"],
                required: true,
                trim: true
            },
            dob: {
                type: Date,
                required: true
            },
            bloodGroup: {
                type: String,
                enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
                required: true,
                trim: true
            }
        },
        academicDetails: {
            course: {
                type: String,
                required: true,
                trim: true
            },
            university: {
                type: String,
                required: true,
                trim: true
            },
            currentYear: {
                type: Number,
                required: true
            },
            admissionYear: {
                type: Number,
                required: true
            },
            studentID: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            collegeName: {
                type: String,
                required: true,
                trim: true
            },
            semester: {
                type: Number,
                required: true,
                default: 1,
                min: 1
            },

            enrollmentStatus: {
                type: String,
                enum: ['Active', 'Inactive'],
                required: true,
                trim: true
            },
        },
        contactInformation: {
            email: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            address: {
                type: String,
                required: true,
                trim: true
            },
            state: {
                type: String,
                required: true,
                trim: true
            },
            emergencyContact: {
                type: String,
                required: true,
                trim: true
            },
            phoneNumber: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            country: {
                type: String,
                required: true,
                trim: true
            },
            guardianName: {
                type: String,
                required: true,
                trim: true
            },
        },
        profileImg: {
            type: String,
            default: ""
        },
        password: {
            type: String,
            required: true
        },
        refreshToken: {
            type: String
        }
    }, { timestamps: true }
)

StudentProfileSchema.pre('save', async function () {
    if (!this.isModified('password')) return

    this.password = await bcrypt.hash(this.password, 10)
})

StudentProfileSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

StudentProfileSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            fullName: this.fullName,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

StudentProfileSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Student = mongoose.model('Student', StudentProfileSchema)

