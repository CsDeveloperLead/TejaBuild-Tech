import React from "react";
import { Facebook, Instagram, Twitter, Check } from "lucide-react";

import img1 from "../assets/man2.webp";
import img2 from "../assets/man3.webp";
import img11 from "../assets/deepak.webp";
import img12 from "../assets/rahul.webp";
import video from "../assets/video2.mp4";

const data = [
  {
    id: 1,
    title:
      "To prioritize safety, quality, and client satisfaction in every aspect of our work.",
  },
  {
    id: 2,
    title:
      "To build lasting relationships with clients by offering flexible, tailored solutions that support their long-term success.",
  },
  {
    id: 3,
    title:
      "To commit to responsible construction practices, reducing environmental impact, and optimizing energy efficiency in all industrial properties.",
  },
];

const LeaderCard = ({ name, post, image }) => {
  return (
    <div className="bg-orange-500 text-white rounded-3xl overflow-hidden flex h-[250px]">
      <div className="w-1/2 bg-gray-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 25%" }}
        />
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="mb-4 text-sm">{post}</p>
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
    <div className="mb-16 px-2 md:px-10">
      <h4 className="text-orange-500 text-sm font-semibold mb-2">OUR VISION</h4>
      <h2 className="text-xl md:text-3xl font-bold mb-4">
        To set new standards in industrial construction, combining quality,
        efficiency, and environmental responsibility.
      </h2>
      <p className="text-gray-600">
        To be the leading provider of innovative, sustainable industrial spaces
        that empower businesses to reach their full potential. <br></br>
      </p>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-2 md:px-10">
      <div className="lg:w-1/2 bg-gray-100 rounded-lg p-8">
        <h4 className="text-2xl font-bold text-orange-500 mb-6">Our Mission</h4>
        <ul className="space-y-6">
          {data.map((item) => (
            <li key={item.id} className="flex items-start">
              <span className="text-3xl font-bold text-orange-500 mr-4">
                {item.id.toString().padStart(2, "0")}
              </span>
              <div>
                <h5 className="text-base font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 bg-gray-100 rounded-lg p-8">
        <blockquote className="text-xl italic mb-4">
          "Building the Future of Industrial Spaces"
        </blockquote>
        <p className="text-gray-600">
          As the owner of our industrial property development company, I am
          proud to lead a team dedicated to excellence and innovation. Our
          mission is to create tailored environments that empower businesses to
          thrive while prioritizing sustainability and responsible construction.
          By incorporating the latest technologies, we strive to reduce our
          environmental impact and ensure client satisfaction. We are committed
          to building lasting relationships based on trust and collaboration,
          positioning ourselves as leaders in the industrial construction sector
          and leaving a positive legacy for future generations.
        </p>
      </div>
    </div>
  );
};

const FeedbackCard = ({ text, author, image }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mx-2 md:mx-10">
      <div className="text-orange-500 mb-4">{"★".repeat(5)}</div>
      <p className="mb-4 text-gray-600">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          {/* <p className="text-sm text-orange-500">{author}</p> */}
        </div>
      </div>
    </div>
  );
};

const FeedbackSection = () => {
  return (
    <div className="bg-neutral-100 py-16 mt-8  rounded-lg px-2 md:px-10">
      <div className=" px-4">
        <h4 className="text-orange-500 text-sm font-semibold mb-2">
          WHAT THEY SAY
        </h4>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Best Feedback From Clients</h2>
          <a href="#reviews" className="text-orange-500 hover:underline">
            See All Reviews →
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 rounded-lg h-[450px] flex items-center justify-center overflow-hidden">
  <div className="relative w-[760px] h-[380px] overflow-hidden" > {/* 16:9 Aspect Ratio */}
    <iframe
      src={video}
      title="Video Title"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full rounded-lg"
    ></iframe>
  </div>
</div>

          <div className="lg:w-1/2 space-y-6">
            <FeedbackCard
              text="Buying an industrial plot from Teja Build Tech was a great investment! The space is perfect for our needs, and the process was smooth from start to finish."
              author="Khush Raj"
              image={img1}
            />
            <FeedbackCard
              text="Our new industrial property from Teja Build Tech is exactly what we needed. It’s already proving to be a valuable asset for our business!"
              author="Jatin Sehgal"
              image={img2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className=" px-4 py-16" id="leaders">
      <h2 className="text-center text-sm text-gray-600 mb-2">ALL OF THEM</h2>
      <h2 className="text-center text-4xl font-bold mb-12">Our Main Leaders</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16 mx-4 md:mx-20">
        <LeaderCard name="Rahul Yadav" post="Founder and CEO" image={img12} />
        <LeaderCard name="Deepak Yadav" post="Founder and CEO" image={img11} />
      </div>
      <OurVision />
      <OurMission />
      <FeedbackSection />
    </div>
  );
};

export default Main;
