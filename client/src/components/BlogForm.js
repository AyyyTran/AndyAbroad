import React, {useState} from 'react';
import UploadAndDisplayImage from './UploadAndDisplayImage';

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
      setCoverImage(null);
      setError(null);
      console.log('New Blog added', json);
    }
  };

  const handleFileSelect = (file) => {
    setCoverImage(file);
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

      <UploadAndDisplayImage
        resetImage={coverImage}
        onFileSelect={handleFileSelect}
      />

      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogForm;
// need work with backedn for file upload with MULTER
// now have to make it so that the images get saved to the public/images folder then the name can dispaly etc
// also make it so that the cover image upload thingy gets reset after being submitted
// also maybe remove selct image entirely and just have the upload button set the state to be that image.
// or create noti for select image
// also eventually do useEffect so that the page auto updates
