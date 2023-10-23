import React, {useState} from 'react';
import UploadAndDisplayImage from './UploadAndDisplayImage';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(''); // Initialize to an empty string
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Proceed with adding the blog data
    const blog = {title, author, content, coverImage};

    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {'Content-Type': 'application/json'},
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle('');
      setAuthor('');
      setContent('');
      setCoverImage('');
      setError(null);
      console.log('New Blog added', json);
    }
  };

  const handleImageUploadConfirmation = (imageFileName) => {
    setCoverImage(imageFileName);
  };

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new Blog</h3>
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter blog title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          placeholder="Enter author name"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          value={author}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          placeholder="Enter blog content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />

        <UploadAndDisplayImage onFileSelect={handleImageUploadConfirmation} />
        <button>Add Blog</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default BlogForm;
