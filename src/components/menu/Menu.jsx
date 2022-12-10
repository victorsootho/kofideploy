import { useRef } from "react";
import "./menu.css";
import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";

const Menu = () => {
  TabTitle("Menu | Kofi Khafetsa");
  const Desserts = useRef(null);
  const Specials = useRef(null);
  const Beverages = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="bg-blue-50">
        <div>
          <div>
            <h2 className="text-center font-bold">Kofi Khafetsa Menu</h2>
          </div>
          <div className="text-center">
            <div className="leading-normal text-center m-0 outline-none box-border max-w-full h-auto inline-block align-middle">
              <ul className="flex p-3 gap-6">
                <li
                  className="rounded font-semibold cursor-pointer bg-blue-300 hover:bg-blue-200 p-2 m-0"
                  onClick={() => scrollToSection(Desserts)}
                >
                  Ice-Cream & <br /> Milkshakes
                </li>
                <li
                  className="rounded font-semibold cursor-pointer bg-blue-300 hover:bg-blue-200 p-2 m-0"
                  onClick={() => scrollToSection(Specials)}
                >
                  View <br /> Specials
                </li>
                <li
                  className="rounded font-semibold cursor-pointer bg-blue-300 hover:bg-blue-200 p-2 m-0"
                  onClick={() => scrollToSection(Beverages)}
                >
                  Food & <br /> Beverages
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="font-bold pt-3 pb-3">
                <h1 ref={Desserts}>Desserts</h1>
                <img
                  src={
                    "https://res.cloudinary.com/dhmwcesi8/image/upload/v1664795152/KofiKhafetsa/kofimenu1_ddfts1.jpg"
                  }
                  className="text-xs leading-normal text-center m-0 outline-none box-border max-w-full h-auto inline-block align-middle"
                  alt=""
                />
              </div>
              <div className="font-bold pt-3 pb-3">
                <div>
                  <div ref={Specials}>Specials</div>
                </div>
                <img
                  src={
                    "https://res.cloudinary.com/dhmwcesi8/image/upload/v1664795152/KofiKhafetsa/kofimenu2_yjptlv.jpg"
                  }
                  className="text-xs leading-normal text-center m-0 outline-none box-border max-w-full h-auto inline-block align-middle"
                  alt=""
                />
              </div>
              <div className="font-bold pt-3 pb-3">
                <div ref={Beverages}>Food and Beverages</div>
                <img
                  src={
                    "https://res.cloudinary.com/dhmwcesi8/image/upload/v1664795154/KofiKhafetsa/kofispecials3_iiunia.jpg"
                  }
                  className="text-xs leading-normal text-center m-0 outline-none box-border max-w-full h-auto inline-block align-middle w-780"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
