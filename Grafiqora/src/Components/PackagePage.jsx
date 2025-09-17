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
    <div className="w-screen h-screen flex flex-row bg-blue-100">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-start items-start p-6 md:p-8 overflow-hidden">
        {/* Tag Row with Package Comparison heading */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-yellow-300 px-3 py-1 rounded text-sm font-semibold">
            Monthly
          </span>
          <h2 className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-semibold">
            Package Comparison
          </h2>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug md:leading-tight">
          What's Included In{" "}
          <span className="bg-pink-500 text-white px-2 rounded">Bespoke</span>{" "}
          Our Social{" "}
          <span className="bg-green-400 px-2 rounded">Management</span> Packages
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto h-screen bg-amber-100">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded p-2 flex flex-col gap-1 w-full text-sm leading-snug min-h-[140px] md:min-h-[160px]"
          >
            <h3 className="text-blue-600 font-bold">{pkg.name} – {pkg.price}</h3>
            <p className="text-gray-700 text-sm">{pkg.desc}</p>
            <ul className="list-disc list-inside text-gray-700 text-sm overflow-auto">
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