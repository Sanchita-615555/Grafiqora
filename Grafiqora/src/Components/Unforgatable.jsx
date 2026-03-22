import React from "react";

export default function BowlShapeLayout() {
  return (
    <div className="w-full bg-blue-100 flex flex-col items-center relative overflow-hidden px-6 lg:px-12 py-16">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-extrabold text-black 
                     bg-amber-200 px-8 py-4 
                     rounded-t-xl tracking-wide 
                     text-center shadow-md z-20">
        LET’S MAKE YOUR BRAND UNFORGETTABLE.
      </h1>

      {/* Bowl Shape */}
      <div
        className="relative w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[50%]
                   min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[400px]
                   flex items-center justify-center 
                   -mt-8 z-10 pb-12"
      >
        {/* Top Curve */}
        <div className="absolute top-0 w-full h-[40%] 
                        bg-blue-300 rounded-[50%/100%]"></div>

        {/* Bottom Bowl */}
        <div
          className="absolute bottom-0 w-full h-full bg-blue-300 shadow-xl"
          style={{
            clipPath: "ellipse(50% 100% at 50% 0%)",
          }}
        ></div>

        {/* Text */}
        <p className="relative z-20 
                      text-black text-sm sm:text-base md:text-lg lg:text-xl 
                      font-semibold text-center 
                      leading-relaxed px-6 max-w-[85%]">
          At Brand Grafiqora, we design experiences that leave a lasting impact on your audience.
          Whether you are a startup or an established business, our strategies adapt to your unique journey.
        </p>
      </div>

      {/* Bottom Images */}
      <div className="flex flex-col md:flex-row gap-10 
                      w-full max-w-[1600px] 
                      justify-center items-center 
                      mt-16 md:mt-24">

        <div className="w-full md:w-1/2 h-72 md:h-80 lg:h-[420px]
                        rounded-2xl shadow-xl overflow-hidden 
                        transform hover:scale-105 transition duration-300">
          <img
            src="https://media.istockphoto.com/id/2171092251/photo/digital-marketing-commerce-online-sale-concept-businessman-using-laptop-with-ads-dashboard.jpg?b=1&s=612x612&w=0&k=20&c=FB70wrRteu7eMZ9EsG4sFnYOlSRnSozMTylDWEpcYgM="
            alt="Left Box"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 h-72 md:h-80 lg:h-[420px]
                        rounded-2xl shadow-xl overflow-hidden 
                        transform hover:scale-105 transition duration-300">
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