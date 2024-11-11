import React, { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ib08fi5", // Replace with your EmailJS service ID
        "template_6e62j87", // Replace with your EmailJS template ID
        formRef.current,
        "0DKo0xi501z-g34Mt" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          // Optionally, reset the form after sending the email
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-gray-100 rounded-lg p-8 max-sm:px-4 lg:w-1/2 lg:ml-20 shadow-md">
      <h3 className="text-4xl font-bold mb-4">Leave a Message For Us</h3>
      <p className="text-gray-600 mb-6">
        To create industrial infrastructure that fuels economic growth, supports
        job creation, and strengthens communities.
      </p>
      <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="mb-2 text-sm">First Name</label>
            <input
              type="text"
              name="from_name" // Ensure each input has a unique name
              placeholder="Ex. Jatin"
              className="w-full p-3 rounded-full border border-gray-300"
              required // Make this input required
            />
          </div>
          <div className="flex-1">
            <label className="mb-2 text-sm">Second Name</label>
            <input
              type="text"
              name="last_name" // Ensure each input has a unique name
              placeholder="Ex. Sharma"
              className="w-full p-3 rounded-full border border-gray-300"
              required // Make this input required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="mb-2 text-sm">E-mail</label>
            <input
              type="email"
              name="email" // Ensure each input has a unique name
              placeholder="Ex. Hello@email"
              className="w-full p-3 rounded-full border border-gray-300"
              required // Make this input required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 text-sm">Message</label>
          <textarea
            name="message" // Ensure this input has a unique name
            placeholder="Your message..."
            className="w-full p-3 rounded-lg border border-gray-300 h-32"
            required // Make this input required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="lg:w-1/2 p-8 max-sm:p-4">
      <h4 className="text-orange-500 text-sm font-bold mb-2">
        STAY TUNED WITH US
      </h4>
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Keep Connected & Lets Get In Touch With Our Team
      </h2>
      <p className="text-gray-600 mb-8">
      To build a legacy of durable, adaptable industrial spaces that stand the test of time.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <MapPin className="text-orange-500 mr-4" size={24} />
          <p>Our Head Office: D39 Teja Tower RDC Rajnagar Ghaziabad</p>
        </div>
        <div className="flex items-center">
          <Mail className="text-orange-500 mr-4" size={24} />
          <p>Email Address: tejabuildtech.marketing@gmail.com</p>
        </div>
        <div className="flex items-center">
          <Phone className="text-orange-500 mr-4" size={24} />
          <p>Telephone: +91 9654987004 </p>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="font-sans">
      <div className="mx-auto px-0 sm:px-6 lg:px-8 py-16 max-sm:py-8 max-sm:pt-0">
        <div className="flex flex-col lg:flex-row justify-between">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
