import React from "react";

export default function HowWeWorkGrid() {
  const steps = [
    {
      title: "Brand Consultation",
      desc: "Understanding your goals, audience & vision.",
      img: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
    },
    {
      title: "Creative Concept",
      desc: "Building a strategy & content plan tailored to you.",
      img: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    },
    {
      title: "Design & Production",
      desc: "Crafting high-quality graphics, reels & videos.",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      title: "Publishing & Promotion",
      desc: "Posting with the right timing, hashtags.",
      img: "https://images.pexels.com/photos/5077062/pexels-photo-5077062.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcefe7] flex flex-col items-center px-4 relative py-8">
      {/* Title */}
      <h2 className="bg-teal-600 text-white px-6 py-2 rounded-full text-xl font-bold mb-8">
        How We Work ?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-7xl h-auto md:h-[50vh]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative rounded-xl shadow-md overflow-hidden md:${
              index % 2 === 0 ? "translate-y-6" : "-translate-y-6"
            }`}
          >
            {/* Image */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-64 md:h-full object-cover"
            />

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2">
              <div className="bg-yellow-300 w-full min-h-[28px] flex items-center justify-center rounded">
                <h3 className="text-[11px] font-bold text-center">{step.title}</h3>
              </div>
              <p className="mt-1 text-[10px] text-gray-700 leading-snug line-clamp-2">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="absolute bottom-2 right-4 text-xs font-semibold text-black-900 bg-green-300">
        Grafiqora
      </p>
    </div>
  );
}
