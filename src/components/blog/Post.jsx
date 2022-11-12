import { Link } from "react-router-dom";

const BlogList = ({ post }) => {
  return (
    <div className="blog-list lg:mx-96">
      <div className="blog-preview py-2 px-4 mx-0 border border-gray-100 border-solid">
        <Link to={`/post/${post._id}`}>
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">
            {post.title}
          </h2>
          <p>Written by {post.username}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
