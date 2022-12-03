import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";

function Blog() {
  TabTitle("Patron's Writings");

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://kofiserver.onrender.com/api/posts"
        );
        setPosts(res.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Posts posts={posts} />
        </div>
      )}
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
