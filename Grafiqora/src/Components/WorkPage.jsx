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
    <div className="h-screen bg-[#fcefe7] flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* Title */}
      <h2 className="bg-teal-600 text-white px-6 py-2 rounded-full 
                     text-xl md:text-2xl lg:text-3xl font-bold 
                     mb-6">
        How We Work ?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 
                      gap-4 w-full max-w-[1200px]">

        {steps.map((step) => (
          <div
            key={step.title}
            className="relative rounded-xl shadow-md overflow-hidden 
                       transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-44 md:h-52 lg:h-56 object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2">

              {/* Title */}
              <div className="bg-yellow-300 w-full py-1 rounded">
                <h3 className="text-xs md:text-sm font-bold text-center">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-1 text-xs md:text-sm font-semibold 
                            text-emerald-700 leading-snug">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}