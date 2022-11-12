import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="main-footer block">
      <div className="text-center">
        <div>
          <h3 className="text-lg sm:text-3xl sm:mt-4 font-semibold">
            Love Coffee? So Do We
          </h3>
          <p className="text-base flex justify-center sm:text-xl">
            <a href="https://goo.gl/maps/3o1kGybh2oa9dfWJ7">
              <MdLocationOn className="text-2xl" />
            </a>
            <a href="https://goo.gl/maps/3o1kGybh2oa9dfWJ7">Lepoqong, Maseru</a>
          </p>
        </div>
        <div className="footer-icons my-3 py-0">
          <ul className="flex px-4 gap-6 justify-center">
            <li>
              <a href="https://www.facebook.com/kofikhafetsa/">
                <BsFacebook className="cursor-pointer text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kofikhafetsa">
                <BsTwitter className="text-3xl" />
              </a>
            </li>
            <li>
              <BsWhatsapp className="text-3xl" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
