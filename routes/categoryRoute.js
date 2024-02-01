const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// get all categories
router.get('/', categoryController.getAllCategories);

// create a category
router.post('/', categoryController.createCategory);

// get category by id
router.get('/:id', categoryController.getCategoryById);

// update category by id
router.put('/:id', categoryController.updateCategoryById);

// delete category by id
router.delete('/:id', categoryController.deleteCategoryById);

// delete all categories
router.delete('/', categoryController.deleteAllCategories);

module.exports = router;