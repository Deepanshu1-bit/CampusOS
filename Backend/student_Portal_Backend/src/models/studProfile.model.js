import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const StudentProfileSchema = new Schema(
    {
        PersonalDetails: {
            FullName: {
                type: String,
                required: true,
                trim: true
            },
            Gender: {
                type: String,
                enum: ["Male", "Female", "Other"],
                required: true,
                trim: true
            },
            DOB: {
                type: Date,
                required: true
            },
            BloodGroup: {
                type: String,
                enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
                required: true,
                trim: true
            }
        },
        AcademicDetails: {
            Course: {
                type: String,
                required: true,
                trim: true
            },
            University: {
                type: String,
                required: true,
                trim: true
            },
            CurrentYear: {
                type: Number,
                required: true
            },
            AdmissionYear: {
                type: Number,
                required: true
            },
            StudentID: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            CollegeName: {
                type: String,
                required: true,
                trim: true
            },
            Semester: {
                type: Number,
                required: true,
                default: 1,
                min: 1
            },

            EnrollmentStatus: {
                type: String,
                enum: ['Active', 'Deactive'],
                required: true,
                trim: true
            },
        },
        ContactInformation: {
            email: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            Address: {
                type: String,
                required: true,
                trim: true
            },
            State: {
                type: String,
                required: true,
                trim: true
            },
            EmergencyContact: {
                type: String,
                required: true,
                trim: true
            },
            PhoneNumber: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            City: {
                type: String,
                required: true,
                trim: true
            },
            Country: {
                type: String,
                required: true,
                trim: true
            },
            GuardianName: {
                type: String,
                required: true,
                trim: true
            },
        },
        ProfileImg: {
            type: String,
            default: ""
        },
        password: {
            type: String,
            required: true,
            trim: true
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

export const Student = mongoose.model('Student', StudentProfileSchema)

