import mongoose, { Schema } from "mongoose";



const NoticeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    notice: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Academic", "Event", "Important", "Opportunity","Sports"],
    }
}, { timestamps: true })


export const Notice = mongoose.model('Notice', NoticeSchema)