import mongoose, { Schema } from "mongoose";

const SubjectSchema = new Schema({
    subjectName: {
        type: String,
        required: true,
        trim: true
    },

    subjectCode: {
        type: String,
        required: true,
        unique: true
    },

    semester: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    },

    course: {
        type: String,
        required: true
    }
});

export const SubjectModel = mongoose.model("Subject", SubjectSchema);