import { TabTitle } from "../../utils/TitleFunctions";
import Footer from "../Footer";
import BlogLink from "./BlogLink";
import MenuLink from "./MenuLink";
import SubmitLink from "./SubmitLink";

const Home = () => {
  TabTitle("Kofi Khafetsa | Welcome");
  return (
    <div>
      <section>
        <div>
          <MenuLink />
        </div>
        <div>
          <SubmitLink />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
