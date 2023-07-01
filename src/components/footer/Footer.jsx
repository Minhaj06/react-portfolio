import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 font-preahvihear">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h3 className="text-2xl">Find Me on</h3>
            <div className="flex mt-3">
              <Link to="#" className="mr-4">
                <FaFacebookF className="text-white w-6 h-6" />
              </Link>
              <Link to="#" className="mr-4">
                <FaTwitter className="text-white w-6 h-6" />
              </Link>
              <Link to="#" className="mr-4">
                <FaInstagram className="text-white w-6 h-6" />
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl">Address</h3>
              <p className="mt-3">Phone: +88 01303 148457</p>
              <p>Email: milonmdminhajkobir@gmail.com</p>
              <p>Address: Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h3 className="text-2xl">Contact Form</h3>
            <form className="mt-4">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-800 focus:outline-none focus:bg-primary"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-800 focus:outline-none focus:bg-primary"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-800 focus:outline-none focus:bg-primary"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primaryDark text-white px-4 py-2 rounded-md hover:bg-primaryLight focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="mt-8 text-center border-t border-slate-700 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
