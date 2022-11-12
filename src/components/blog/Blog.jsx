import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";

function Blog() {
  TabTitle("Patron's Writings");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div>
        <Posts posts={posts} />
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
