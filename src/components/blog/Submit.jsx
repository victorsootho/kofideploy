import { useState } from "react";
import axios from "axios";
import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";

const Submit = () => {
  TabTitle("Kofi Submissions");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username,
      title,
      body,
    };
    try {
      const res = await axios.post(
        "https://kofiserver.onrender.com/api/posts/",
        newPost
      );
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div>
      <div className="bg-gray-100 rounded m-2 md:my-16 md:mx-44">
        <div className="text-center my-0 mx-auto max-w-sm">
          <h2 className="text-xl text-orange-800 mb-8 font-semibold py-2">
            Add a New Post
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="text-left block">Blog title:</label>
            <input
              className="w-full box-border block py-1 px-2 my-2 mx-0 border-2 border-gray-400 focus:outline-none rounded font-bold"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-left block">Blog author:</label>
            <input
              className="w-full box-border block py-1 px-2 my-2 mx-0 border-2 border-gray-400 focus:outline-none rounded font-bold"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="text-left block">Blog body:</label>
            <textarea
              className="w-full box-border block py-1 px-2 my-2 mx-0 border-2 border-gray-400 focus:outline-none rounded text-base font-medium"
              rows={15}
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-900 hover:bg-yellow-800 text-white p-2 rounded cursor-pointer m-6"
            >
              Add Entry
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
