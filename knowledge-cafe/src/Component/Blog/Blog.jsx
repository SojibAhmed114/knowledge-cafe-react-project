import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-6 items-center">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-lg">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min ago</span>
        </div>
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{hashtags.map((hash, inx) => <span key={inx}> <a href=''># {hash}</a></span>)}</p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog
