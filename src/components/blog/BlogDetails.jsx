import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { TabTitle } from "../../utils/TitleFunctions";
import { ClipLoader } from "react-spinners";

function BlogDetails() {
  TabTitle("Khafetsa Talent");
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://kofiserver.onrender.com/api/posts/" + path
        );
        setPost(res.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    getPost();
  }, [path]);
  return (
    <div>
      {loading && (
        <div className="spinner mt-24 md:mt-48">
          <ClipLoader
            className=""
            color="#925e06"
            loading
            size={50}
            speedMultiplier={0.75}
          />
        </div>
      )}
      {!loading && (
        <div className="px-2">
          <div className="blog-details pt-8 lg:mx-80 md:mt-8">
            <article>
              <h2 className="text-3xl text-center font-semibold text-yellow-900 mb-2">
                {post.title}
              </h2>
              <p className="text-xl text-center font-semibold">
                By{" "}
                <span className="font-bold border-gray-00 border-b-2">
                  {post.username}
                </span>
              </p>
              <div className="my-5 text-base text-black font-medium mx-0 whitespace-pre-wrap">
                {post.body}
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
