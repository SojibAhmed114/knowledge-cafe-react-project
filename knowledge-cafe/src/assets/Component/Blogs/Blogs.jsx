import {useState, useEffect } from "react";
// import PropTypes from "prop-types";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])
  return (
    <div>
      
    </div>
  )
}

// Blogs.propTypes = {
//   blogs: PropTypes.array.isRequired
// };
export default Blogs
