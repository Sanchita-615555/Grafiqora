import React from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full min-h-screen bg-[#f8f2ec] flex flex-col md:flex-row relative">

      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-6 gap-3">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-extrabold border-l-4 border-pink-500 pl-3 bg-amber-200 w-fit">
          READY TO WORK WITH US?
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-snug">
          Let’s create designs, videos, and campaigns that inspire, engage, and convert.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
          Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 mt-2 text-gray-800">
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Phone className="w-5 h-5" />
            <a href="tel:+917749835889">Tripto Ghosh - +91 77498 35889</a>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Phone className="w-5 h-5" />
            <a href="tel:+917991078389">Anusree Saha - +91 79910 78389</a>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Mail className="w-5 h-5" />
            <a href="mailto:grafiqora@gmail.com">
              grafiqora@gmail.com
            </a>
          </div>
        </div>
      </div>

    
  {/* Right Side Image (Full Width, Auto Height) */}
<div className="flex-1 flex items-center justify-center bg-[#f8f2ec]">
  <img
    src="https://images.pexels.com/photos/6032801/pexels-photo-6032801.jpeg"
    alt="Contact Visual"
    className="w-full h-auto object-contain"
  />
</div>

    
    </div>
  );
}