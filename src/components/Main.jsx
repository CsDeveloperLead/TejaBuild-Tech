import React from 'react';
import { Facebook, Instagram, Twitter, Check } from 'lucide-react';

const LeaderCard = ({ name }) => {
  return (
    <div className="bg-orange-500 text-white rounded-3xl overflow-hidden flex">
      <div className="w-1/2 bg-gray-300"></div>
      <div className="w-1/2 p-6">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex space-x-4">
          <Facebook size={20} />
          <Instagram size={20} />
          <Twitter size={20} />
        </div>
      </div>
    </div>
  );
};

const OurVision = () => {
  return (
    <div className="mb-16">
      <h4 className="text-orange-500 text-sm font-semibold mb-2">OUR VISION</h4>
      <h2 className="text-3xl font-bold mb-4">
        Give More Better House Interior Design & Decoration For All Clients
      </h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2 bg-gray-100 rounded-lg p-8">
        <h4 className="text-2xl font-bold text-orange-500 mb-6">Our Mission</h4>
        <ul className="space-y-6">
          {[1, 2, 3].map((num) => (
            <li key={num} className="flex items-start">
              <span className="text-4xl font-bold text-orange-500 mr-4">{num.toString().padStart(2, '0')}</span>
              <div>
                <h5 className="text-lg font-semibold mb-2">Mission Title {num}</h5>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 bg-gray-100 rounded-lg p-8">
        <blockquote className="text-xl italic mb-4">
          "Lorem ipsum dolor sit amet consectetur adipiscing elit."
        </blockquote>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

const FeedbackCard = ({ text, author }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <div className="text-orange-500 mb-4">{'★'.repeat(5)}</div>
      <p className="mb-4 text-gray-600">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-orange-500">{author}</p>
        </div>
      </div>
    </div>
  );
};

const FeedbackSection = () => {
  return (
    <div className="bg-neutral-100 py-16 mt-8 px-4 rounded-lg">
      <div className="container mx-auto px-4">
        <h4 className="text-orange-500 text-sm font-semibold mb-2">WHAT THEY SAY</h4>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Best Feedback From Clients</h2>
          <a href="#reviews" className="text-orange-500 hover:underline">See All Reviews →</a>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-gray-300 rounded-lg h-64 flex items-center justify-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl">▶</div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <FeedbackCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor" author="Mr. Aslam" />
            <FeedbackCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor" author="Mr. Aslam" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-sm text-gray-600 mb-2">ALL OF THEM</h2>
      <h2 className="text-center text-4xl font-bold mb-12">Our Main Leaders</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <LeaderCard name="Abdul Salam" />
        <LeaderCard name="Abdul Salam" />
      </div>
      <OurVision />
      <OurMission />
      <FeedbackSection />
    </div>
  );
};

export default Main;