const BlogDetails = ({blog}) => (
  <div className="blog-details">
    <img className="blogImg" src={`/images/${blog.coverImage}`} alt="blog" />
    <h4>{blog.title}</h4>
    <p>{blog.content}</p>
  </div>
);

export default BlogDetails;
