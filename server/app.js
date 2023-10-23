require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogs');
const cors = require('cors');

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});
const upload = multer({storage: storage});

// express app
const app = express();
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// middleware, express.json passes and attaches the data to request obj
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/blogs', blogRoutes);

// // Define a route for handling file uploads
app.post('/api/upload', upload.single('coverImage'), (req, res) => {
  // Check if a file was uploaded successfully
  if (!req.file) {
    return res.status(400).json({error: 'No file uploaded.'});
  }
  res.json({message: 'File uploaded successfully.'});
});

// Connect to mongodb and listening for port
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and listening on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
