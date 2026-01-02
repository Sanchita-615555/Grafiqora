import React from "react";

const PartnerPage = () => {
  const hexagons = [
    { text: "Affordable Packages", color: "bg-green-400" },
    { text: "End-to-End Solutions", color: "bg-purple-500" },
    { text: "Speed + Quality", color: "bg-blue-600" },
    { text: "Creative Meets Technical", color: "bg-pink-500" },
  ];

  return (
    <div
      className="relative w-full h-screen bg-green-100 
                 overflow-hidden box-border"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 
                      bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] 
                      pointer-events-none" />

      {/* HEADER (FIXED HEIGHT = 96px) */}
      <div
        className="absolute top-0 left-0 
                   w-72 h-24 
                   bg-green-900 text-white 
                   rounded-b-full shadow-lg 
                   flex flex-col items-center justify-center"
      >
        <h1 className="text-xl font-bold leading-tight text-center">
          Partner with Brand Grafiqora
        </h1>
        <p className="text-sm">Why Partner?</p>
      </div>

      {/* CONTENT AREA = 100vh - 96px */}
      <div
        className="absolute left-0 top-24 w-full 
                   h-[calc(100vh-96px)] 
                   flex items-center justify-center"
      >
        <div className="flex flex-row gap-8 items-center">

          {/* Hexagons */}
          <div className="grid grid-cols-4 gap-3">
            {hexagons.map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} text-white font-semibold 
                            w-24 h-20 
                            flex items-center justify-center 
                            shadow-md clip-hexagon 
                            text-xs text-center px-1`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* List Box */}
          <div className="bg-green-900 text-white 
                          rounded-2xl shadow-lg 
                          p-4 w-72">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>End-to-End Solutions for your needs</li>
              <li>Tailored strategies for social media platforms</li>
              <li>Creative design meets effective marketing strategy</li>
              <li>Affordable packages with flexible pricing</li>
              <li>Speedy delivery without sacrificing quality</li>
            </ul>
          </div>

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

          body {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default PartnerPage;
