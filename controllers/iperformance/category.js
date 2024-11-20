const Category = require('../../models/iperformance/category');


// Create a category
exports.createCategory = async (req, res) => {
    try {
        const { title, description, createdBy } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required.' });
        }

        const category = new Category({
            title,
            description,
        });

        await category.save();

        res.status(201).json({
            message: 'Category created successfully.',
            category,
        });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({
            message: 'An error occurred while creating the category.',
            error: error.message,
        });
    }
};

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        res.status(200).json({
            message: 'Category deleted successfully.',
            category,
        });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({
            message: 'An error occurred while deleting the category.',
            error: error.message,
        });
    }
};

// Update a category by ID
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        if (title) category.title = title;
        if (description) category.description = description;

        await category.save();

        res.status(200).json({
            message: 'Category updated successfully.',
            category,
        });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({
            message: 'An error occurred while updating the category.',
            error: error.message,
        });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 }); // Sort by newest first
        res.status(200).json({
            message: 'Categories retrieved successfully.',
            categories,
        });
    } catch (error) {
        console.error('Error retrieving categories:', error);
        res.status(500).json({
            message: 'An error occurred while retrieving the categories.',
            error: error.message,
        });
    }
};

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        res.status(200).json({
            message: 'Category retrieved successfully.',
            category,
        });
    } catch (error) {
        console.error('Error retrieving category:', error);
        res.status(500).json({
            message: 'An error occurred while retrieving the category.',
            error: error.message,
        });
    }
};


