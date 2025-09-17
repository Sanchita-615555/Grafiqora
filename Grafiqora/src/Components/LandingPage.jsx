import React from "react";

export default function Brochure() {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
                 bg-[url('/Landing.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="relative w-[90%] md:w-[70%] lg:w-[60%] p-6 rounded-xl 
                   shadow-xl border bg-[#FDF5E6]/90"
      >
        {/* Main Content */}
        <div className="text-center relative z-10">
          <h1 className="text-3xl md:text-10xl font-serif italic text-gray-800 font-semibold">
            Grafiqora
          </h1>
          <p className="text-xl font-bold tracking-wider mt-4">
            DESIGNING STORIES. CREATING IMPACT.
          </p>
          <span className="inline-block mt-6 px-4 py-2 bg-yellow-300 rounded-md text-black font-semibold">
            OFFICIAL BROCHURE
          </span>
        </div>
      </div>
    </div>
  );
}