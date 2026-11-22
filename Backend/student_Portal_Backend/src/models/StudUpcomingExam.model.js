import mongoose, { Schema } from "mongoose";


const UpcomingExamSchema = new Schema({
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    examDate: {
        type: Date,
        required: true
    },
    examTime: {
        type: String,
        required: true
    },
    examVenue: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })


export const UpcomingExam = mongoose.model('UpcomingExam', UpcomingExamSchema)