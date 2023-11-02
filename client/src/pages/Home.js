import BlogForm from '../components/BlogForm';
import {useBlogsContext} from '../hooks/useBlogsContext';

// Components
import {useEffect} from 'react';
import BlogDetails from '../components/BlogDetails';

const Home = () => {
  const {blogs, dispatch} = useBlogsContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_BLOGS', payload: json});
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    // Home should contain a list or gird of all the available blogs.
    // Clicking on a blog should open up that exact blog into a standalon page where it displays dynamic
    // content based on the content of that blog
    // Home should just have navbar and list of articles and footer
    // Maybe A single blog should be split into different sections. Made up of
    // multiple blog sections
    <div className="home">
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>
      <BlogForm />
    </div>
  );
};

export default Home;
