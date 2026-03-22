import React from "react";

const PartnerPage = () => {
  const hexagons = [
    { text: "Affordable Packages", color: "bg-green-400" },
    { text: "End-to-End Solutions", color: "bg-purple-500" },
    { text: "Speed + Quality", color: "bg-blue-600" },
    { text: "Creative Meets Technical", color: "bg-pink-500" },
  ];

  return (
    <div className="relative w-full bg-green-100 py-12 px-4 lg:px-12">

      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none" />

      {/* Header */}
      <div className="mx-auto w-full max-w-lg lg:max-w-2xl h-32 bg-green-900 text-white 
                      rounded-b-full shadow-lg flex flex-col items-center justify-center px-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Partner with Brand Grafiqora
        </h1>
        <p className="text-sm md:text-base mt-1">Why Partner?</p>
      </div>

      {/* Hexagon Grid */}
      <div
        className="grid gap-10 mt-12 w-full max-w-[2000px] mx-auto
                   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        {hexagons.map((item, idx) => (
          <div
            key={idx}
            className={`${item.color} text-white font-semibold 
                        h-32 md:h-36 lg:h-44 xl:h-52
                        flex items-center justify-center 
                        shadow-xl clip-hexagon 
                        text-base md:text-lg lg:text-xl xl:text-2xl
                        text-center px-4
                        transition-transform duration-300 hover:-translate-y-3`}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* List Box */}
      <div className="flex justify-center mt-14">
        <div className="bg-green-900 text-white rounded-2xl shadow-xl 
                        p-8 w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <ul className="list-disc pl-6 space-y-4 
                         text-sm md:text-base lg:text-lg xl:text-xl">
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