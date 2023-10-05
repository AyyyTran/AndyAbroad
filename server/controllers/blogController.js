const Blog = require('../models/BlogModel.js');
const mongoose = require('mongoose');
//GET all blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({createdAt: -1});
  res.status(200).json(blogs);
};

//GET a certain blog
const getBlog = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog exists'});
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({error: 'No such blog exists'});
  }

  res.status(200).json(blog);
};

// POST a new blog
const createBlog = async (req, res) => {
  const {title, author, content, coverImage} = req.body;

  // Adding document to db
  try {
    const blog = await Blog.create({title, author, content, coverImage});
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// DELETE a blog
const deleteBlog = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog exists'});
  }

  const blog = await Blog.findOneAndDelete({_id: id});

  if (!blog) {
    return res.status(404).json({error: 'No such blog exists'});
  }

  res.status(200).json(blog);
};

// UPDATE a blog
const updateBlog = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog exists'});
  }

  const blog = await Blog.findOneAndUpdate({_id: id}, {...req.body});

  if (!blog) {
    return res.status(404).json({error: 'No such blog exists'});
  }

  res.status(200).json(blog);
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
};
