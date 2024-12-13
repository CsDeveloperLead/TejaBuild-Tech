import { Link } from "react-router-dom";
import mainimg from "../assets/main1.png";
import mainimg2 from "../assets/main2.png";
import mainimg3 from "../assets/main3.png";
import mainimg4 from "../assets/main4.png";
import { useEffect, useRef, useState } from "react";

const KK = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          observer1.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer2.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);
          observer1.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible4(true);
          observer2.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef1.current) {
      observer1.observe(imageRef1.current);
    }

    if (imageRef2.current) {
      observer2.observe(imageRef2.current);
    }

    if (imageRef3.current) {
      observer3.observe(imageRef3.current);
    }

    if (imageRef4.current) {
      observer4.observe(imageRef4.current);
    }

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);

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

      <div className="flex w-full flex-col md:flex-row gap-6 overflow-hidden">
        <div className="w-full md:w-1/2">
          <div
            ref={imageRef1}
            className={`${isVisible1 ? 'animate-fadeInLeft' : 'opacity-0'} w-full rounded-[30px] h-[500px] md:h-[760px] flex justify-center items-end duration-500 transition-opacity`}
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
            ref={imageRef2}
            className={`${isVisible2 ? 'animate-fadeInRight' : 'opacity-0'} rounded-[30px] w-full h-1/2 duration-500 transition-opacity`}
            style={{ backgroundImage: `url(${mainimg2})`, backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
          <div className="flex gap-6 h-1/2">
            <div
              ref={imageRef3}
              className={`${isVisible3 ? 'animate-fadeInUp' : 'opacity-0'} rounded-[30px] w-full`}
              style={{ backgroundImage: `url(${mainimg3})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div
              ref={imageRef4}
              className={`${isVisible4 ? 'animate-fadeInUp' : 'opacity-0'} rounded-[30px] w-full`}
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
