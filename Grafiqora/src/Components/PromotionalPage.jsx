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
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-amber-200 flex flex-col items-center py-16 px-4">
      
      {/* Centered Heading */}
      <div className="mb-12 w-full flex justify-center px-2">
  <div className="bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 px-4 py-3 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide text-center">
      PROMOTIONAL VIDEO PRODUCTION
    </h2>
  </div>
</div>



      {/* Main Content: Image + Services */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-12">

        {/* Left: Image */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/33899322/pexels-photo-33899322.jpeg"
            alt="Video Production"
            className="rounded-3xl shadow-2xl w-full max-w-sm md:max-w-[320px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Services */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-50 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <ArrowRight className="text-orange-500 mt-1 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
