import { Link } from "react-router-dom";

function SubmitLink() {
  return (
    <section>
      <div className="frame y-0 mx-auto border-x-8 border-gray-300">
        <div className="mt-0 p-4">
          <div>
            <img
              src="https://res.cloudinary.com/dhmwcesi8/image/upload/v1670228235/KofiKhafetsa/green-chameleon-s9CC2SKySJM-unsplash_ynteie.jpg"
              className="block h-420 w-112 sm:w-full sm:h-full object-cover object-center"
              alt=""
            />
          </div>
          <Link to="/submit">
            <div className=" bg-blue-600 p-2 mt-4 sm:px-1 mx-24 rounded">
              <p className="text-center text-white font-semibold">
                Write to Us
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SubmitLink;
