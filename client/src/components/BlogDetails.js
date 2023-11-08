import {useBlogsContext} from '../hooks/useBlogsContext';

const BlogDetails = ({blog}) => {
  const {dispatch} = useBlogsContext();

  const handleClick = async () => {
    const response = await fetch('./api/blogs/' + blog._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_BLOG', payload: json});
    }
  };

  return (
    <div className="blog-details">
      <img className="blogImg" src={`/images/${blog.coverImage}`} alt="blog" />
      <h4>{blog.title}</h4>
      <p>{blog.content}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default BlogDetails;
