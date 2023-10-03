const express = require('express');
const {createBlog} = require('../controllers/blogController');

const router = express.Router();

//GET all blogs
router.get('/', (req, res) => {
  res.json({msg: 'GET all blogs'});
});

//GET a certain blog
router.get('/:id', (req, res) => {
  res.json({msg: 'GET a blog'});
});

// POST a new blog
router.post('/', createBlog);

// DELETE a blog
router.delete('/:id', (req, res) => {
  res.json({msg: 'DELETE a blog'});
});
// UPDATE a blog
router.patch('/:id', (req, res) => {
  res.json({msg: 'UPDATE a blog'});
});

module.exports = router;
