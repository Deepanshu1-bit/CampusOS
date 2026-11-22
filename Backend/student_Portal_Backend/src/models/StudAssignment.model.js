import mongoose, { Schema } from "mongoose";



const AssignmentSchema = new Schema({
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed'],
        default:'Pending'
    }
}, { timestamps: true })



export const Assignment = mongoose.model('Assignment', AssignmentSchema)