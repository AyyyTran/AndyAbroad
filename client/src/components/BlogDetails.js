const BlogDetails = ({blog}) => (
  <div className="blog-details">
    <h4>{blog.title}</h4>
    <p>
      <strong>Authour</strong>
      {blog.author}
    </p>
    <p>
      <strong>Content</strong>
      {blog.content}
    </p>
    <p>{blog.createdAt}</p>
    <p>{blog.coverImage}</p>
    {/* both of the below work */}
    {/* <img src={blogimg} alt="blog" /> */}
    {/* <img className="blogImg" src={`/images/onsen.jpg`} alt="blog" /> */}
    <img className="blogImg" src={`../images/${blog.coverImage}`} alt="blog" />
  </div>
);

export default BlogDetails;
