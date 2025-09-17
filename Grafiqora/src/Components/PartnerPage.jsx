import React from "react";
const PartnerPage = () => {
  const hexagons = [
    { text: "Affordable Packages", color: "bg-green-400" },
    { text: "End-to-End Solutions", color: "bg-purple-500" },
    { text: "Speed + Quality", color: "bg-blue-600" },
    { text: "Creative Meets Technical", color: "bg-pink-500" },
  ];

  return (
    <div className="relative bg-green-100 h-screen w-full overflow-hidden p-6">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none" />

      {/* Half-circle Title (Top Left) */}
      <div className="absolute top-0 left-0 w-70 h-26 bg-green-900 text-white rounded-b-full shadow-lg flex flex-col items-center justify-center p-4">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Partner with Brand Grafiqora
        </h1>
        <p className="mt-1 text-sm md:text-base text-center">Why Partner?</p>
      </div>

      {/* Hexagon Boxes in one row (smaller size) */}
      <div className="absolute top-36 left-6 flex flex-row gap-2">
        {hexagons.map((item, idx) => (
          <div
            key={idx}
            className={`${item.color} text-white font-semibold w-18 h-16 flex items-center justify-center shadow-md clip-hexagon text-[9px] text-center px-1`}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* List Box (Right side, stuck to edge) */}
      <div className="absolute top-33 right-0 bg-green-900 text-white rounded-2xl shadow-lg p-2 w-64 h-56">
        <ul className="list-disc list-inside space-y-1 text-left text-xs">
          <li>End-to-End Solutions for your needs</li>
          <li>Tailored strategies for social media platforms</li>
          <li>Creative design meets effective marketing strategy</li>
          <li>Affordable packages with flexible pricing</li>
          <li>Speedy delivery without sacrificing quality</li>
        </ul>
      </div>

      {/* Hexagon CSS */}
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