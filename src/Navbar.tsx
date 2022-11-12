import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-100 pb-2">
      <nav className="px-5 pt-5 items-center my-0 mx-auto max-w-xl sm:flex">
        <h1 className="text-yellow-900 text-center my-2">
          <Link to="/" className="font-dance-script text-2xl">
            Kofi Khafetsa
          </Link>
        </h1>
        <div className="ml-auto">
          <ul className="list-none pl-0 flex justify-center">
            <Link to="/" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Home
              </li>
            </Link>
            <Link to="/menu" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Menu
              </li>
            </Link>
            <Link to="/blog" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Blog
              </li>
            </Link>
            <Link to="/submit" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Submit
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
