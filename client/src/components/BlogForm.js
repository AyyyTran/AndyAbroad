import React, {useState} from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = {title, author, content, coverImage};

    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {'Content-Type': ' application/json'},
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

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Blog</h3>
      <label htmlFor="">Blog Title</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label htmlFor="">Author</label>
      <input
        type="text"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        value={author}
      />
      <label htmlFor="">Content</label>
      <textarea
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      />

      <label htmlFor="">Cover Image Name</label>
      <input
        type="text"
        onChange={(e) => {
          setCoverImage(e.target.value);
        }}
        value={coverImage}
      />
      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogForm;
