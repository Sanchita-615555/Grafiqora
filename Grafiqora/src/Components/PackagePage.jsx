import React from "react";

export default function SocialMediaPackages() {
  const packages = [
    {
      name: "BASIC PACKAGE",
      price: "₹3,000/MONTH",
      desc: "Perfect for Small brands or startups",
      features: [
        "8 custom graphic posts (tailored to your brand style)", 
        "2 engaging reels (basic editing)", 
        "Monthly performance report"
      ],
    },
    {
      name: "PRO PACKAGE",
      price: "₹4,500/MONTH",
      desc: "A balanced plan for growing brands.",
      features: [
        "15 custom graphic posts", 
        "5–6 engaging reels (with advanced transitions)", 
        "Captions + hashtags (SEO optimized)", 
        "Monthly performance insights & growth suggestions"
      ],
    },
    {
      name: "PREMIUM PACKAGE",
      price: "₹6,500/MONTH",
      desc: "Best for brands who want to dominate social media.",
      features: [
        "20+ custom graphic posts", 
        "8–10 high-quality reels (with advanced effects + trending audios)", 
        "Professional Copywriting (captions, hashtags, hooks)", 
        "Cross-promotion on popular local pages for higher reach"
      ],
    },
  ];

  return (
    <div className="w-full bg-blue-50 flex flex-col md:flex-row px-6 lg:px-12 py-12 gap-10">

      {/* Left Side */}
      <div className="md:flex-1 flex flex-col justify-center">

        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="bg-yellow-300 px-4 py-1 rounded text-sm font-semibold">
            Monthly
          </span>
          <h2 className="bg-purple-500 text-white px-4 py-1 rounded text-sm font-semibold">
            Package Comparison
          </h2>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                       font-extrabold leading-snug">
          What's Included In{" "}
          <span className="bg-pink-500 text-white px-2 rounded">Bespoke</span>{" "}
          Our Social{" "}
          <span className="bg-green-400 px-2 rounded">Management</span> Packages
        </h1>
      </div>

      {/* Right Side */}
      <div className="md:flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-2xl p-6 
                       flex flex-col gap-3 
                       bg-white shadow-lg hover:shadow-xl 
                       transition duration-300"
          >
            <h3 className="text-blue-600 font-bold text-lg lg:text-xl">
              {pkg.name} – {pkg.price}
            </h3>

            <p className="text-gray-700 text-sm md:text-base">
              {pkg.desc}
            </p>

            <ul className="list-disc list-inside text-gray-700 
                           space-y-2 text-sm md:text-base">
              {pkg.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}