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
    <div className="h-screen w-full flex items-center justify-center overflow-hidden px-4 bg-amber-100">
      {/* Main Container */}
      <div className="w-full max-w-6xl flex items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start w-1/2">
          {/* Title Box */}
          <div className="bg-[#f8e9d2] px-3 py-2 rounded-md shadow-sm">
            <h2 className="text-lg font-bold text-center lg:text-left px-3 py-2">
              PROMOTIONAL VIDEO PRODUCTION
            </h2>
          </div>

          {/* Image */}
          <div className="mt-3">
            <img
              src="https://images.pexels.com/photos/33899322/pexels-photo-33899322.jpeg"
              alt="Video Production"
              className="rounded-md shadow-md w-[220px] lg:w-[220px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col gap-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-2">
              <ArrowRight className="text-blue-600 mt-0.5 w-7 h-7" />
              <div>
                <h3 className="text-xs font-semibold">{service.title}</h3>
                <p className="text-gray-700 text-[10px] leading-tight">
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