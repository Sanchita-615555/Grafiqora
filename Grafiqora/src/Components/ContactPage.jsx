import React from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#f8f2ec] relative">

      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6 gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                       font-extrabold border-l-4 border-pink-500 pl-4 bg-amber-200 w-fit
                       mt-6 md:mt-0">
          READY TO WORK WITH US?
        </h1>

        {/* Main Text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-snug">
          Let’s create designs, videos, and campaigns that inspire, engage, and convert.
        </p>

        {/* Contact Text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
          Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 mt-3 text-gray-800 text-lg md:text-xl lg:text-2xl">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <a href="tel:+917749835889">Tripto Ghosh - +91 77498 35889</a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <a href="tel:+917991078389">Anusree Saha - +91 79910 78389</a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <a href="mailto:grafiqora@gmail.com">
              grafiqora@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 h-screen flex items-center justify-center bg-[#f8f2ec]">
        <img
          src="https://images.pexels.com/photos/6032801/pexels-photo-6032801.jpeg"
          alt="Contact Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}