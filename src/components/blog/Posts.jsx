import Post from "./Post";

function Posts({ posts }) {
  return (
    <div>
      <h2 className="blog-list text-xl font-bold text-center mt-6">
        All Posts
      </h2>
      {posts.map((p) => (
        <div key={p._id}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
