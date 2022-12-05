import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";
import BlogDetails from "./components/blog/BlogDetails";
import Home from "./components/homepage/Home";
import Menu from "./components/menu/Menu";
import NotFound from "./components/blog/NotFound";
import Submit from "./components/blog/Submit";
import Navbar from "./Navbar";
import Posts from "./components/blog/Posts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/post/:id" element={<BlogDetails />} />
          <Route path="/post/:id" element={<Posts />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
