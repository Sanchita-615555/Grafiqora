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
      <h2 className="bg-teal-600 text-white px-5 py-3 rounded-full 
                     text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
        How We Work ?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 
                      gap-8 w-full max-w-[1500px]">

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative rounded-2xl shadow-xl overflow-hidden 
                        transition-transform duration-300 hover:scale-105
                        ${index % 2 === 0 
                          ? "xl:translate-y-16" 
                          : "xl:-translate-y-16"}`}
          >
            {/* Image */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-72 md:h-80 xl:h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4">

              {/* Title */}
              <div className="bg-yellow-300 w-full py-2 rounded">
                <h3 className="text-base md:text-lg xl:text-xl font-bold text-center">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm md:text-base xl:text-lg font-semibold 
                            text-emerald-700 leading-snug">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="absolute bottom-3 right-4 text-sm font-semibold text-black 
                    bg-green-300 px-3 py-1 rounded">
        Grafiqora
      </p>
    </div>
  );
}