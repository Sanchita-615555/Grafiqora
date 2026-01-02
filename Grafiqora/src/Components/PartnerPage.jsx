import React from "react";

const PartnerPage = () => {
  const hexagons = [
    { text: "Affordable Packages", color: "bg-green-400" },
    { text: "End-to-End Solutions", color: "bg-purple-500" },
    { text: "Speed + Quality", color: "bg-blue-600" },
    { text: "Creative Meets Technical", color: "bg-pink-500" },
  ];

  return (
    <div className="relative w-full bg-green-100 min-h-[100vh] box-border py-6">

      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none" />

      {/* Header Half Circle */}
      <div className="mx-auto w-80 md:w-92 h-28 bg-green-900 text-white rounded-b-full shadow-lg flex flex-col items-center justify-center z-20 px-4">
        <h1 className="text-lg md:text-2xl font-bold text-center leading-tight">
          Partner with Brand Grafiqora
        </h1>
        <p className="text-xs md:text-sm mt-1">Why Partner?</p>
      </div>

      {/* Hexagons Row */}
      <div className="flex gap-4 mt-6 px-4 overflow-x-auto justify-start md:justify-start">
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

      {/* List Box Centered */}
      <div className="flex justify-center mt-6 px-4 md:px-0">
        <div className="bg-green-900 text-white rounded-2xl shadow-lg p-4 w-full md:w-80">
          <ul className="list-disc list-outside pl-5 space-y-2 text-xs md:text-sm">
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
