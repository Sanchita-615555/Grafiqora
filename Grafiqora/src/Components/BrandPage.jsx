import React from "react";

export default function BrandPage() {
  return (
    <div className="w-full flex flex-col bg-[#FCEEDF] px-4 sm:px-6 lg:px-12 py-4 lg:py-10">

      {/* Text Section */}
      <div className="w-full flex flex-col justify-center mb-4 lg:mb-8">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-3 bg-amber-300 inline-block px-3">
          Grafiqora
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
          Designing Stories. Creating Impact.
        </p>

        <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3">
          At Brand Grafiqora, we believe a brand is more than just visuals — it’s
          an experience that connects, inspires, and lasts.
        </p>

        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl">
          In today’s competitive digital era, standing out requires more than
          just presence. It requires strategy, creativity, and consistency.
          That’s where we come in — with end-to-end social media marketing and
          design solutions crafted to make your brand unforgettable.
        </p>

      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Team meeting"
          className="
            w-full 
            sm:w-[90%] 
            lg:w-[80%] 
            xl:w-[70%]
            h-auto 
            object-cover 
            rounded-xl 
            shadow-lg
          "
        />
      </div>

    </div>
  );
}