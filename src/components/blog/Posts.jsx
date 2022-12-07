import { Link } from "react-router-dom";

function Posts({ posts }) {
  return (
    <div>
      <h2 className="blog-list text-xl font-bold text-center mt-6">
        All Posts
      </h2>
      {posts.map((p) => (
        <div key={p._id}>
          <div className="blog-list lg:mx-96">
            <div className="blog-preview py-2 px-4 mx-0 border border-gray-100 border-solid">
              <Link to={`/post/${p._id}`}>
                <h2 className="text-xl font-semibold text-yellow-900 mb-2">
                  {p.title}
                </h2>
                <p>
                  By <span className="font-semibold">{p.username}</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
