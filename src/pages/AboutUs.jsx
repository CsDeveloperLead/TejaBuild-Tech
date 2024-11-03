import Main from "../components/Main";
import { Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import  {useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {

  const leadersRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#leader" && leadersRef.current) {
      leadersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 max-sm:pt-2">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20">
          {/* Left: Images */}
          <div className="w-full md:w-[45%] mt-10 md:mt-0">
            <div className="w-full">
              <span className="relative">
                <img
                  src="https://placehold.co/350x450"
                  alt="placeholder"
                  className="rounded-3xl hidden md:block"
                />
                <img
                  src="https://placehold.co/250x350"
                  alt="placeholder"
                  className="rounded-3xl md:hidden"
                />
                <img
                  src="https://placehold.co/350x450"
                  alt="placeholder"
                  className="rounded-3xl absolute top-1/4 left-1/4 hidden md:block"
                />
                <img
                  src="https://placehold.co/250x350"
                  alt="placeholder"
                  className="rounded-3xl absolute top-1/4 left-1/4 md:hidden"
                />
                <div className="bg-[#ef6d11] py-2 md:py-3 rounded-xl text-white flex flex-col px-4 md:px-8 justify-center items-center absolute left-10 md:left-20 -bottom-8">
                  <h1 className="font-bold text-xl md:text-2xl">120+</h1>
                  <p className="text-[12px]">Happy Clients</p>
                </div>
              </span>
            </div>
          </div>

          {/* Right: Text Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-28 lg:mt-0">
            <span className="text-gray-600 uppercase">ABOUT US</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-6">
              We Are in This Business Since 15 Years
            </h2>
            <p className="text-gray-600 mb-6">
              Teja Buildtech envisions being the foremost choice for businesses
              seeking quality industrial and commercial plots in India. We
              aspire to contribute significantly to the economic growth of the
              nation by providing world-class infrastructure that fosters
              business excellence.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Trophy className="text-orange-500 mr-3" size={24} />
                <span>20+ Winning Awards</span>
              </li>
              <li className="flex items-center">
                <Calendar className="text-orange-500 mr-3" size={24} />
                <span>15 Years Of Experience</span>
              </li>
            </ul>
            <Link to={"/contact-us"}>
            <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 rounded-lg py-12 px-4 mt-10 md:mt-40 flex flex-wrap justify-around">
          {[
            { number: "80+", label: "Industrial Sites" },
            { number: "14+", label: "Industrial Partners" },
            { number: "102+", label: "Commercial Packages" },
            { number: "15Y+", label: "Years Of Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center mb-8 lg:mb-0 flex flex-col gap-2 items-center"
            >
              <div className="text-2xl md:text-4xl font-bold text-orange-500">
                {stat.number}
              </div>
              <div className="text-gray-600 font-bold mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
       <div id="leader" ref={leadersRef}>
       <Main />
       </div>
      
    </div>
  );
};

export default AboutUs;
