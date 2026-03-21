import React from "react";
import { ArrowRight } from "lucide-react";

export default function PromoVideoProduction() {
  const services = [
    {
      title: "Corporate & Brand Films",
      desc: "We narrate your journey and values, showcasing achievements through impactful storytelling.",
    },
    {
      title: "Product & Service Promotions",
      desc: "Highlight features with creativity, making your products stand out in a crowded market.",
    },
    {
      title: "Event Coverage",
      desc: "Capture the essence of your events with cinematic style, preserving memories for years to come.",
    },
    {
      title: "Social Media–Optimized Edits",
      desc: "Our platform-ready videos are designed for trends, ensuring maximum engagement across social media channels.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-amber-50 to-amber-200 flex flex-col py-6">

      {/* Heading */}
      <div className="mb-5 w-full flex justify-center px-4">
        <div className="bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 px-4 py-2 rounded-2xl shadow-md">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center">
            PROMOTIONAL VIDEO PRODUCTION
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-1">

       
        {/* Image Half */}
<div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-auto">
  <img
    src="https://images.pexels.com/photos/33899322/pexels-photo-33899322.jpeg"
    alt="Video Production"
    className="w-full h-full object-cover"
  />
</div>

        {/* Services Half */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-50 p-4 rounded-xl shadow-md"
            >
              <ArrowRight className="text-orange-500 mt-1 w-6 h-6 flex-shrink-0" />

              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}