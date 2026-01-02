import React from "react";

export default function BowlShapeLayout() {
  return (
    <div className="min-h-screen w-full bg-blue-100 flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black bg-amber-200 px-8 py-4 rounded-t-xl tracking-wide text-center shadow-md z-20">
        LET’S MAKE YOUR BRAND UNFORGETTABLE.
      </h1>

      {/* Bowl Shape (Like Your Drawing) */}
      <div className="relative w-[80%] sm:w-[65%] md:w-[55%] h-48 sm:h-56 flex items-center justify-center -mt-6 z-10">
        
        {/* Upper Elliptical Top */}
        <div className="absolute top-0 w-full h-[40%] bg-blue-300 rounded-[50%/100%]"></div>
        
        {/* Bottom Bowl Curve */}
        <div
          className="absolute bottom-0 w-full h-full bg-blue-300 shadow-lg"
          style={{
            clipPath: "ellipse(50% 100% at 50% 0%)",
          }}
        ></div>

        {/* Text inside */}
        <p className="relative text-black text-sm sm:text-base md:text-lg font-semibold text-center leading-relaxed px-6 z-20">
          At Brand Grafiqora, we design experiences that leave a lasting impact on your audience. Whether you are a startup or an established business, our strategies adapt to your unique journey.
        </p>
      </div>

      {/* Bottom Images */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-center mt-20 md:mt-28">
        <div className="w-full md:w-1/2 h-64 md:h-72 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://media.istockphoto.com/id/2171092251/photo/digital-marketing-commerce-online-sale-concept-businessman-using-laptop-with-ads-dashboard.jpg?b=1&s=612x612&w=0&k=20&c=FB70wrRteu7eMZ9EsG4sFnYOlSRnSozMTylDWEpcYgM="
            alt="Left Box"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-72 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg"
            alt="Right Box"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
