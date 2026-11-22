import mongoose, { Schema } from "mongoose";


const ExaminationSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    marksObtained: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    totalMarks: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    exam: {
        type: Schema.Types.ObjectId,
        ref: 'UpcomingExam',
        required: true
    }
}, { timestamps: true })


export const Examination = mongoose.model('Examination', ExaminationSchema)