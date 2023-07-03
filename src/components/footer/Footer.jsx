import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../contactForm/ContactForm";

const Footer = () => {
  return (
    <footer id="contact" className="bgCustomGradient text-white pt-12 pb-6 font-preahvihear">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
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
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl">Contact Form</h3>
            <ContactForm />
          </div>
        </div>

        {/* Copyright Area */}
        <div className="mt-8 text-center border-t border-slate-700 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Md Minhaj Kobir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
