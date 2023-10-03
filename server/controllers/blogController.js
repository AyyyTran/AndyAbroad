const Blog = require('../models/BlogModel.js');

//GET all blogs
//GET a certain blog
// POST a new blog
const createBlog = async (req, res) => {
  const {title, author, content} = req.body;

  // Adding document to db
  try {
    const blog = await Blog.create({title, author, content});
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
// DELETE a blog
// UPDATE a blog

module.exports = {
  createBlog,
};
