import React from "react";

export default function BrandPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCEEDF] px-4 sm:px-6 lg:px-12 py-6">

      {/* Text Section First */}
      <div className="w-full flex flex-col justify-center mb-6">

        <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-3 bg-amber-300 inline-block px-2">
          Grafiqora
        </h1>

        <p className="text-sm text-gray-700 mb-2">
          Designing Stories. Creating Impact.
        </p>

        <p className="text-sm font-semibold text-gray-900 mb-3">
          At Brand Grafiqora, we believe a brand is more than just visuals — it’s
          an experience that connects, inspires, and lasts.
        </p>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          In today’s competitive digital era, standing out requires more than
          just presence. It requires strategy, creativity, and consistency.
          That’s where we come in — with end-to-end social media marketing and
          design solutions crafted to make your brand unforgettable.
        </p>

      </div>

      {/* Image Section Below */}
      <div className="w-full flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Team meeting"
          className="w-full max-w-md lg:max-w-3xl h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

    </div>
  );
}