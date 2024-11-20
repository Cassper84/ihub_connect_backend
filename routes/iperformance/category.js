const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();
const categoryCtrl = require('../../controllers/iperformance/category');

router.post('/', categoryCtrl.createCategory);
router.delete('/:id', categoryCtrl.deleteCategory);
router.patch('/:id', categoryCtrl.updateCategory);
router.get('/', categoryCtrl.getAllCategories);
router.get('/:id', categoryCtrl.getCategoryById );

module.exports = router;