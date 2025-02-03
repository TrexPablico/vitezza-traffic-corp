import React, { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import contactimg from "../assets/Contact/contactimg.jpg";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import contact from "../assets/Contact/contactimg.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_", "template_", form.current, {
        publicKey: "xFX7lbU3Y_",
      })
      .then(
        () => {
          toast.success("Message Sent", {
            style: {
              background: "orange",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "orange",
            },
          });
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  // }, []);

  return (
    <div
      className="relative max-w mx-auto px-5 bg-cover bg-center"
      style={{
        backgroundImage: `url(${contactimg})`,
      }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative flex flex-col md:flex-row justify-between gap-40 mt-20 p-10 rounded-lg">
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <h3 className="text-2xl font-bold mb-4">
            Send us a Message{" "}
            <FaPaperPlane className="inline-block ml-2 w-8 h-8" />
          </h3>
          <p className="mb-4 text-bold">
            We’d love to hear from you! Whether you're interested in our
            construction materials or looking to start an exciting career in the
            chemical manufacturing industry, we invite you to reach out.
          </p>
          <p className="mb-4">
            For potential clients, let us help turn your vision into reality
            with our expert construction solutions. Share your project details
            with us, send us a message.
          </p>
          <ul>
            <li className="flex items-center mb-4">
              <FaEnvelope className="w-6 h-6 mr-2" />
              Sales.vitezzaconstruction@gmail.com /
              vitezzasalescorporation@gmail.com
            </li>
            <li className="flex items-center mb-4">
              <FaPhone className="w-6 h-6 mr-2" />
              09177059912 / 09171529558 / 09177059903 / 09613367859
            </li>
            <li className="flex items-center mb-4">
              <FaMapMarkerAlt className="w-6 h-6 mr-2" />
              Unit 12 2A Lotus Queen Building, Cagayan Valley Road, Sta Rita
              Guiguinto Bulacan
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 ">Your Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="example@email.com"
                required
                className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-red-400 hover:bg-yellow-500"
            >
              Send Message
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
