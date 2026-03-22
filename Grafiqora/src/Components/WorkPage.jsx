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
    <div className="min-h-screen bg-[#fcefe7] flex flex-col items-center px-4 relative py-12">

      {/* Title */}
      <h2 className="bg-teal-600 text-white px-8 py-3 rounded-full 
                     text-2xl md:text-3xl lg:text-4xl font-bold 
                     mb-12 xl:mb-16">
        How We Work ?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 
                      gap-6 w-full max-w-[1400px] 
                      mt-2 xl:-mt-4">

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative rounded-xl shadow-lg overflow-hidden 
                        transition-transform duration-300 hover:scale-105
                        ${index % 2 === 0 
                          ? "xl:translate-y-10" 
                          : "xl:-translate-y-10"}`}
          >
            {/* Image (HEIGHT KOMANO) */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-60 md:h-64 xl:h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-3">

              {/* Title */}
              <div className="bg-yellow-300 w-full py-1 rounded">
                <h3 className="text-sm md:text-base xl:text-lg font-bold text-center">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-1 text-xs md:text-sm xl:text-base font-semibold 
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