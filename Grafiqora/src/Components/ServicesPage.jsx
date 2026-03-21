import React from "react";

const services = [
  "LOGO DESIGN",
  "VISITING CARDS",
  "DIGITAL ADS",
  "POSTERS & BANNERS",
  "BROCHURES & FLYERS",
  "YOUTUBE THUMBNAILS",
  "SOCIAL MEDIA POSTS",
];

export default function ServicesPage() {
  return (
    <div
      className="w-full min-h-[100vh] bg-cover bg-center px-4 sm:px-6 lg:px-12 py-6"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=DrM7pyMYJXK1cfPMdlXgKSAvoGrd-JdYQOwa7GaF_dE=')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-6 text-center bg-yellow-300 w-full sm:w-[70%] lg:w-[50%] mx-auto py-2 rounded-md">
        Our Core Services
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/90 rounded-xl border border-gray-300 p-4 shadow-lg flex items-center justify-center text-center
                       hover:scale-105 transition duration-300"
          >
            <h3 className="text-sm sm:text-base lg:text-lg font-bold">
              {service}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}