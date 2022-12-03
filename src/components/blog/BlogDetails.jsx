import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";

function BlogDetails() {
  TabTitle("Khafetsa Talent");
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://kofiserver.onrender.com/api/posts/" + path
      );
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div>
      <div className="blog-details pt-8 lg:mx-80 md:mt-8">
        <article>
          <h2 className="text-3xl text-center font-semibold text-yellow-900 mb-2">
            {post.title}
          </h2>
          <p className="text-xl font-semibold">Written by {post.username}</p>
          <div className="my-5 text-lg font-medium mx-0 whitespace-pre-wrap">
            {post.body}
          </div>
        </article>
      </div>
      <div className="sm:mt-96">
        <Footer />
      </div>
    </div>
  );
}

export default BlogDetails;
