import { Link } from "react-router-dom";
import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";

const Home = () => {
  TabTitle("Kofi Khafetsa | Welcome");
  return (
    <div>
      <section>
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/dhmwcesi8/image/upload/v1665759003/KofiKhafetsa/kofimilkshake_pyqyei.jpg"
              className="block h-420 w-112 sm:w-full sm:h-full object-cover object-center"
              alt=""
            />
          </div>
          <div>
            <div className="w-full text-center sm:top-1/3 sm:absolute">
              <div className="bg-gray-50 rounded-sm p-8 sm:m-40 lg:m-96">
                <h2 className="text-xl font-semibold">coffee & tea</h2>
                <h2 className="text-xl font-semibold">
                  ice cream & milkshakes
                </h2>
                <div>
                  <p className="cursor-pointer inline-flex justify-center items-center box-border mt-4">
                    <span className="m-3 p-1">
                      <Link
                        to="/menu"
                        className="border bg-amber-900 border-orange-800 hover:border-orange-900 font-semibold  text-white hover:bg-amber-800 rounded p-4 m-4"
                      >
                        View Menu
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
