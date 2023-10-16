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
// need work with backedn for file upload with MULTER
// now have to make it so that the images get saved to the public/images folder then the name can dispaly etc
// also make it so that the cover image upload thingy gets reset after being submitted
// also maybe remove selct image entirely and just have the upload button set the state to be that image.
// or create noti for select image
// also eventually do useEffect so that the page auto updates
