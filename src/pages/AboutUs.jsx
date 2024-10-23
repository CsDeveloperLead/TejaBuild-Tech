
import Main from '../components/Main';
import { Calendar, Trophy } from 'lucide-react';

const AboutUs = () => {
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
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-6">We Are in This Business Since 15 Years</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 rounded-lg py-12 px-4 mt-10 md:mt-40 flex flex-wrap justify-around">
          {[
            { number: '386', label: 'House Design' },
            { number: '56', label: 'Our Partner' },
            { number: '78', label: 'House Package' },
            { number: '15Y', label: 'Years Of Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center mb-8 lg:mb-0 flex flex-col md:flex-row">
              <div className="text-2xl md:text-4xl font-bold text-orange-500">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Main />
    </div>
  );
};

export default AboutUs;
