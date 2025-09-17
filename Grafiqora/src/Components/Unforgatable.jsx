import React from "react";

export default function CustomLayout() {
  return (
    <div className="h-screen w-screen bg-[#f8f2ec] flex flex-col items-center relative overflow-hidden">
      
      {/* Half Circle Box at Top Right */}
      <div className="absolute top-0 right-0 w-[320px] h-[170px] bg-pink-300 rounded-b-full flex items-center justify-center shadow-lg">
        <p className="text-black text-xs font-semibold text-center px-5 leading-relaxed">
         
          At Brand Grafiqora, we design
          experiences that leave a lasting impact on your audience. Whether you
          are a startup or an established business, our strategies adapt to your
          unique journey.
        </p>
      </div>

      {/* Heading */}
      <h1 className="absolute top-4 text-sm font-bold text-gray-800 tracking-wide bg-amber-200 px-2 py-1 rounded-md">
       LET’S MAKE YOUR BRAND UNFORGETTABLE.
      </h1>

      {/* Content Row */}
      <div className="flex gap-6 mt-2 w-full px-10">
        
        {/* Left Box (with Image) */}
        <div className="w-40 h-60 rounded-lg shadow-md overflow-hidden mt-6 -ml-7 -mb-40">
          <img
            src="https://media.istockphoto.com/id/2171092251/photo/digital-marketing-commerce-online-sale-concept-businessman-using-laptop-with-ads-dashboard.jpg?b=1&s=612x612&w=0&k=20&c=FB70wrRteu7eMZ9EsG4sFnYOlSRnSozMTylDWEpcYgM="
            alt="Left Box Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Box (with Image) */}
        <div className="w-40 h-42 rounded-lg shadow-md overflow-hidden mt-15">
          <img
            src="https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg"
            alt="Right Box Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}