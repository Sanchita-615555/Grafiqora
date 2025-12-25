import React from "react";

export default function Brochure() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
                 bg-[url('/Landing.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div
        className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl
                   p-6 sm:p-8 md:p-10 rounded-2xl
                   shadow-2xl border border-white/40
                   bg-[#FDF5E6]/95 backdrop-blur-sm">
        {/* Main Content */}
        <div className="text-center space-y-4 sm:space-y-6">
          <h1
            className="font-serif italic font-semibold text-gray-800
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Grafiqora
          </h1>

          <p
            className="font-bold tracking-widest text-gray-700
                       text-sm sm:text-base md:text-lg">
            DESIGNING STORIES. CREATING IMPACT.
          </p>

          <span
            className="inline-block mt-4 px-5 py-2
                       bg-yellow-300 text-black font-semibold rounded-full
                       text-xs sm:text-sm md:text-base
                       shadow-md">
            OFFICIAL BROCHURE
          </span>
        </div>
      </div>
    </div>
  );
}
