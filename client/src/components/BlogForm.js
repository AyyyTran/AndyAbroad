import React, {useState} from 'react';
import {useBlogsContext} from '../hooks/useBlogsContext';

const BlogForm = () => {
  const {dispatch} = useBlogsContext();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('coverImage', coverImage);

    // Proceed with adding the blog data
    const blog = {title, author, content};

    // Send the coverImage file to /api/upload route for storage
    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    // Send the blog data to /api/blogs route to create a new blog entry
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({...blog, coverImage: coverImage.name}),
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
      setCoverImage(null);
      setError(null);
      // add to global context state
      dispatch({type: 'CREATE_BLOG', payload: json});
      console.log('New Blog added', json);
    }
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

        <label htmlFor="coverImage">Choose a cover image: </label>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleImageSelect}
        />

        <button>Add Blog</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default BlogForm;
