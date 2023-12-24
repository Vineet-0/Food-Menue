import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    _id: 'String',
    categories: {
        type: [String], // Define an array of strings
        default: ["404 :) Error"],    // Set a default value if needed
    },
});

export const Categories = mongoose.model("Categories", categoriesSchema);