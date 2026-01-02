import React from "react";

const PartnerPage = () => {
  const hexagons = [
    { text: "Affordable Packages", color: "bg-green-400" },
    { text: "End-to-End Solutions", color: "bg-purple-500" },
    { text: "Speed + Quality", color: "bg-blue-600" },
    { text: "Creative Meets Technical", color: "bg-pink-500" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-green-100 overflow-auto box-border">

      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none" />

      {/* Header Half Circle */}
      <div className="mx-auto w-92 h-28 bg-green-900 text-white rounded-b-full shadow-lg flex flex-col items-center justify-center z-20 px-4 mt-4">
        <h1 className="text-lg md:text-2xl font-bold text-center leading-tight">
          Partner with Brand Grafiqora
        </h1>
        <p className="text-xs md:text-sm mt-1">Why Partner?</p>
      </div>

      {/* Hexagons + List */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-0 mt-6">

        {/* Hexagons Horizontal */}
        <div className="flex flex-row gap-4 overflow-x-auto md:overflow-visible">
          {hexagons.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} text-white font-semibold 
                          w-28 h-20 flex items-center justify-center 
                          shadow-md clip-hexagon text-xs md:text-sm text-center px-2
                          flex-shrink-0
                          transition-transform duration-200 hover:-translate-y-1`}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* List Box with perfectly aligned list */}
        <div className="bg-green-900 text-white rounded-2xl shadow-lg p-2 w-92 md:w-80 flex-shrink-0 mt-6 md:mt-0 md:self-center">
          <ul className="list-disc list-outside pl-15 space-y-2 text-xs md:text-sm">
            <li>End-to-End Solutions for your needs</li>
            <li>Tailored strategies for social media platforms</li>
            <li>Creative design meets effective marketing strategy</li>
            <li>Affordable packages with flexible pricing</li>
            <li>Speedy delivery without sacrificing quality</li>
          </ul>
        </div>

      </div>

      {/* Hexagon Clip Path */}
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              25% 6.7%, 75% 6.7%,
              100% 50%, 75% 93.3%,
              25% 93.3%, 0% 50%
            );
          }

          body {
            margin: 0;
          }
        `}
      </style>

    </div>
  );
};

export default PartnerPage;
