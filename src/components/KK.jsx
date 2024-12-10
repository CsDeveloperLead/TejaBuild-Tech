import { Link } from "react-router-dom";
import mainimg from "../assets/main1.png";
import mainimg2 from "../assets/main2.png";
import mainimg3 from "../assets/main3.png";
import mainimg4 from "../assets/main4.png";

const KK = () => {
  return (
    <div className="mx-2">
      {/* Services Section */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 md:mb-10 mx-2">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-3">
          <span className="text-sm text-[#f97316] flex items-center font-bold">
            04 <span className="px-2 flex items-center">|</span> Projects
          </span>
          <p className="text-2xl md:text-4xl font-bold ">
            Some of our Projects
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-[#292929] text-base text-center md:text-start mb-8 md:mb-0">
            Explore a curated selection of luxury homes and high-end real estate
            designed to suit your preferences and needs
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div
            className="w-full rounded-[30px] h-[500px] md:h-[760px] flex justify-center items-end"
            style={{ backgroundImage: `url(${mainimg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="bg-[#292929] p-4 md:p-8 rounded-[30px] w-[90%] h-[150px] md:h-[200px] flex flex-col gap-6 mb-4 md:mb-8">
              <div className="flex justify-between items-center">
                <p className="text-[#ef6d11] font-bold text-xl md:text-4xl">
                  ₹22,500 per sq yard
                </p>
                <Link
                  to={"https://wa.link/mhemmw"} target="_blank"
                  className="relative group rounded-full p-1 bg-gradient-to-r  from-[#292929] to-orange-600 overflow-hidden"
                >
                  {/* Running border with pseudo-element */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#292929] to-orange-600 animate-gradient-flow"></div>

                  {/* Button content */}
                  <button className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                    Get a Deal
                  </button>
                </Link>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex md:flex-col gap-3">
                  <p className="text-white font-semibold">Sai Industrial Park Phase-I</p>
                  <p className="text-gray-400">Ghaziabad, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col h-[450px] md:h-auto gap-6">
          <div
            className="rounded-[30px] w-full h-1/2"
            style={{ backgroundImage: `url(${mainimg2})`, backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
          <div className="flex gap-6 h-1/2">
            <div
              className="rounded-[30px] w-full"
              style={{ backgroundImage: `url(${mainimg3})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div
              className="rounded-[30px] w-full"
              style={{ backgroundImage: `url(${mainimg4})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center mt-10">
        <Link
          to="/properties#main"
          className="relative group mx-auto rounded-full p-1 bg-gradient-to-r  from-white to-orange-600 overflow-hidden"
        >
          {/* Running border with pseudo-element */}
          <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

          {/* Button content */}
          <button className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded-full md:text-xl">
            Explore More Properties
          </button>
        </Link>
      </div>
    </div>
  );
};

export default KK;
