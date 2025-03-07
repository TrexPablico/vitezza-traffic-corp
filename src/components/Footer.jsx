import React from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa"; // Import FaEnvelope

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-500 font-sans">
        {/* Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p>Phone: +639177059912</p>
          <p>Email: Sales.vitezzaconstruction@gmail.com</p>
          <p>
            Unit 12 2A Lotus Queen Building, Cagayan Valley Road, Sta Rita
            Guiguinto Bulacan
          </p>
          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <a
                href="https://web.facebook.com/VitezzaCandS?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600"
              >
                <FaFacebook
                  size={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>
              <p>Vitezza Corporation</p>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:Sales.vitezzaconstruction@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-red-600"
              >
                <FaEnvelope
                  size={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>
              <p>Sales.vitezzaconstruction@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold text-lg mb-4">Our Location</h3>
          <div className="w-full h-40 bg-gray-400 rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61700.476643873146!2d120.8293233253767!3d14.865625286043318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965370254dbb89%3A0xb38ed040d3c183a5!2sLotus%20Queen%20Building!5e0!3m2!1sen!2sph!4v1738586012487!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
