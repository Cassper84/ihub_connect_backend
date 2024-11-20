const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set to the current date/time
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        default: null, // Initially null; can be updated later
    },
    updatedAt: {
        type: Date,
        default: null, // Set to null and updated when changes occur
    },
});

// Add a pre-save hook to update `updatedAt` when the document is modified
categorySchema.pre('save', function (next) {
    if (this.isModified()) {
        this.updatedAt = Date.now();
    }
    next();
});

module.exports = mongoose.model('Category', categorySchema);
