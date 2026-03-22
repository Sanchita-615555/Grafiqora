import React from "react";

const PartnerPage = () => {
  const hexagons = [
    { text: "Affordable Packages", color: "bg-green-400" },
    { text: "End-to-End Solutions", color: "bg-purple-500" },
    { text: "Speed + Quality", color: "bg-blue-600" },
    { text: "Creative Meets Technical", color: "bg-pink-500" },
  ];

  return (
    <div className="relative w-full bg-green-100 py-10 px-4 lg:px-10">

      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none" />

      {/* Header */}
      <div className="mx-auto w-full max-w-md h-32 bg-green-900 text-white 
                      rounded-b-full shadow-lg flex flex-col items-center justify-center px-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
          Partner with Brand Grafiqora
        </h1>
        <p className="text-sm mt-1">Why Partner?</p>
      </div>

      {/* Hexagons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 
                      mt-10 max-w-6xl mx-auto">

        {hexagons.map((item, idx) => (
          <div
            key={idx}
            className={`${item.color} text-white font-semibold 
                        w-full h-24 md:h-28 lg:h-32
                        flex items-center justify-center 
                        shadow-lg clip-hexagon text-xs md:text-sm lg:text-base 
                        text-center px-3
                        transition-transform duration-300 hover:-translate-y-2`}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* List Box */}
      <div className="flex justify-center mt-10">
        <div className="bg-green-900 text-white rounded-2xl shadow-xl 
                        p-6 w-full max-w-md">
          <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
            <li>End-to-End Solutions for your needs</li>
            <li>Tailored strategies for social media platforms</li>
            <li>Creative design meets effective marketing strategy</li>
            <li>Affordable packages with flexible pricing</li>
            <li>Speedy delivery without sacrificing quality</li>
          </ul>
        </div>
      </div>

      {/* Hexagon Shape */}
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              25% 6.7%, 75% 6.7%,
              100% 50%, 75% 93.3%,
              25% 93.3%, 0% 50%
            );
          }
        `}
      </style>

    </div>
  );
};

export default PartnerPage;