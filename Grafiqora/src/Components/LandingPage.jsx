import React from "react";

export default function Brochure() {
  return (
    <div
      className="relative w-full min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-12
                 bg-[url('/Landing.jpg')] bg-cover bg-center bg-no-repeat">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Card */}
      <div
        className="relative z-10 w-full 
                   sm:w-[90%] 
                   md:w-[80%] 
                   lg:w-[70%] 
                   xl:w-[60%]
                   p-6 sm:p-8 md:p-10 lg:p-12
                   rounded-2xl shadow-2xl border border-white/40
                   bg-[#FDF5E6]/95 backdrop-blur-md">

        {/* Main Content */}
        <div className="text-center space-y-4 sm:space-y-6">

          <h1
            className="font-serif italic font-semibold text-gray-800
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Grafiqora
          </h1>

          <p
            className="font-bold tracking-widest text-gray-700
                       text-sm sm:text-base md:text-lg lg:text-xl">
            DESIGNING STORIES. CREATING IMPACT.
          </p>

          <span
            className="inline-block mt-4 px-6 py-2
                       bg-yellow-300 text-black font-semibold rounded-full
                       text-xs sm:text-sm md:text-base lg:text-lg
                       shadow-md">
            OFFICIAL BROCHURE
          </span>

        </div>
      </div>

    </div>
  );
}