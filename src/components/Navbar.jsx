import React, { useState } from "react";
import nav from "../assets/Navbar/nav.png";
import { FaPhone, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavMenu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Products",
    url: "#products",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="overflow-hidden bg-gray-200 relative px-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <img src={nav} alt="logo" className="w-20" />

        <div className="hidden md:flex space-x-4">
          {NavMenu.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-black"
              onClick={handleSmoothScroll}
            >
              {item.title}
            </a>
          ))}
        </div>

        <a
          href="tel:+639177059912"
          className="hidden md:flex items-center text-black"
        >
          <FaPhone className="mr-2" />
          Call Us +639177059912
        </a>

        <button onClick={toggle} className="md:hidden text-black">
          {isOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden bg-gray-200 dropdown-menu ${
          isOpen ? "show" : ""
        }`}
      >
        {NavMenu.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="block text-black py-2 px-4"
            onClick={handleSmoothScroll}
          >
            {item.title}
          </a>
        ))}
        <a
          href="tel:+639177059912"
          className="flex items-center text-black py-2 px-4"
        >
          <FaPhone className="mr-2" />
          Call Us +639177059912
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
