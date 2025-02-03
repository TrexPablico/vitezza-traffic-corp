const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-500 font-sans">
        {/* Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
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
