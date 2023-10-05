const express = require('express');
const {
  createBlog,
  getAllBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogController');

const router = express.Router();

//GET all blogs
router.get('/', getAllBlogs);

//GET a certain blog
router.get('/:id', getBlog);

// POST a new blog
router.post('/', createBlog);

// DELETE a blog
router.delete('/:id', deleteBlog);

// UPDATE a blog
router.patch('/:id', updateBlog);

module.exports = router;
