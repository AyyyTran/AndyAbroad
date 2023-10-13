const BlogDetails = ({blog}) => (
  <div className="blog-details">
    <img className="blogImg" src={`../images/${blog.coverImage}`} alt="blog" />
    <h4>{blog.title}</h4>
    {/* <p>{blog.updatedAt}</p>
    <p>
      <strong>Author: </strong>
      {blog.author}
    </p> */}
    <p>{blog.content}</p>
    {/* Might change to Images ontop of Title ontop of description. */}
    {/* both of the below work */}
    {/* <img src={blogimg} alt="blog" /> */}
    {/* <img className="blogImg" src={`/images/onsen.jpg`} alt="blog" /> */}
  </div>
);

export default BlogDetails;
