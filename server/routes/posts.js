const express = require('express');

const router = express.Router();

//GET all posts
router.get('/', (req, res) => {
  res.json({msg: 'GET all posts'});
});

//GET a certain post
router.get('/:id', (req, res) => {
  res.json({msg: 'GET a post'});
});

// POST a new post
router.post('/', (req, res) => {
  res.json({msg: 'CREATE a post'});
});

// DELETE a post
router.delete('/:id', (req, res) => {
  res.json({msg: 'DELETE a post'});
});
// UPDATE a post
router.patch('/:id', (req, res) => {
  res.json({msg: 'UPDATE a post'});
});

module.exports = router;
