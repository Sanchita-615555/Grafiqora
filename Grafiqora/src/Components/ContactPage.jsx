import React from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full min-h-screen bg-[#f8f2ec] flex flex-col md:flex-row overflow-hidden relative">

      {/* Left Side - Text */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-14 gap-5 z-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold inline-block border-l-4 border-pink-500 pl-3 bg-amber-200 w-fit">
          READY TO WORK WITH US?
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
          Let’s create designs, videos, and campaigns that inspire, engage, and convert.
        </p>

        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 mt-4 text-gray-800">
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            <a href="tel:+917749835889">Tripto Ghosh – +91 77498 35889</a>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            <a href="tel:+917991078389">Anusree Saha – +91 79910 78389</a>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            <a href="mailto:grafiqora@gmail.com">grafiqora@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 w-full h-[55vh] md:h-screen">
        <img
          src="https://images.pexels.com/photos/6032801/pexels-photo-6032801.jpeg"
          alt="Contact Visual"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Small logo text */}
      <div className="absolute bottom-4 right-4 text-xs font-bold text-black">
        Grafiqora
      </div>
    </div>
  );
}
