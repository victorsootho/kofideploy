import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-100 pb-2 sm:pb-0">
      <nav className="px-5 pt-5 items-center my-0 mx-auto max-w-xl sm:flex">
        <h1 className="text-yellow-900 text-center my-2">
          <Link to="/" className="font-dance-script text-2xl">
            Kofi Khafetsa
          </Link>
        </h1>
        <div className="ml-auto">
          <ul className="list-none pl-0 gap-1 flex justify-center">
            <NavLink to="/" end className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                <h1>Home</h1>
              </li>
            </NavLink>
            <NavLink to="/menu" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Menu
              </li>
            </NavLink>
            <NavLink to="/blog" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Blog
              </li>
            </NavLink>
            <NavLink to="/submit" className="font-bold">
              <li className="no-underline p-2 hover:bg-yellow-900 hover:text-white rounded">
                Submit
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
