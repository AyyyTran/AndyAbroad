const express = require('express');

const router = express.Router();

//GET all posts
router.get('/', () => {
  res.json({msg: 'GET all posts'});
});

//GET a certain post
router.get('/:id', () => {
  res.json({msg: 'GET a post'});
});

// POST a new post
router.post('/', () => {
  res.json({msg: 'CREATE a post'});
});

// DELETE a post
router.delete('/:id', () => {
  res.json({msg: 'DELETE a post'});
});
// UPDATE a post
router.patch('/:id', () => {
  res.json({msg: 'UPDATE a post'});
});

modules.exports = router;
