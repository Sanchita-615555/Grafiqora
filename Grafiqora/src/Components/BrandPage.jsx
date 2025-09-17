import React from "react";

export default function BrandPage() {
  return (
    <div className="h-screen flex flex-row bg-[#FCEEDF]">

      {/* Left Side: Image */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Team meeting"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1 flex flex-col justify-center p-4 relative">
        <h1 className="text-3xl font-bold font-serif mb-2 bg-amber-300">
          Grafiqora
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          Designing Stories. Creating Impact.
        </p>
        <p className="text-sm font-semibold text-gray-900 mb-2">
          At Brand Grafiqora, we believe a brand is more than just visuals — it’s
          an experience that connects, inspires, and lasts.
        </p>
        <p className="text-xs text-[10px] text-gray-600 leading-snug">
          In today’s competitive digital era, standing out requires more than
          just presence. It requires strategy, creativity, and consistency.
          That’s where we come in — with end-to-end social media marketing and
          design solutions crafted to make your brand unforgettable.
        </p>

        {/* Small Box at Right Bottom Corner */}
        <div className="absolute bottom-2 right-2 bg-green-300 text-black px-1 py-0.5  rounded-md text-sm font-bold shadow-md">
          Grafiqora
        </div>
      </div>

    </div>
  );
}