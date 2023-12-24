import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50,
        },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50,
        },
        price: {
            type: String,
            trim: true,
            required: true,
            maxlength: 20,
        },
        isVeg: {
            type: Boolean,
            required: true,
        },
        image: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        description: {
            type: String,
            required: true,
            maxlength: 5000,
        },
    }
);

export const Items = mongoose.model("Items", itemSchema);