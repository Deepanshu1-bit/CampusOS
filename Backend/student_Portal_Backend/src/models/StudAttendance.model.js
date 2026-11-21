import mongoose, { Schema } from "mongoose";


const StudentAttendanceSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        unique: true,
        required: true
    },

    Subjects: [
        {
            subject: {
                type: Schema.Types.ObjectId,
                ref: "Subject",
                required: true
            },
            totalClasses: {
                type: Number,
                default: 0,
                min: 0
            },

            presentClasses: {
                type: Number,
                default: 0,
                min: 0
            }
        }
    ]
},
    { timestamps: true }
)

export const StudentAttendanceModel = mongoose.model('studentAttendance', StudentAttendanceSchema)