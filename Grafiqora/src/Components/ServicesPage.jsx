import React from "react";

const servicesLeft = [
  { title: "LOGO DESIGN" },
  { title: "VISITING CARDS" },
  { title: "DIGITAL ADS" },
];

const servicesRight = [
  { title: "POSTERS & BANNERS" },
  { title: "BROCHURES & FLYERS" },
  { title: "YOUTUBE THUMBNAILS" },
  { title: "SOCIAL MEDIA POSTS" },
];

export default function ServicesPage() {
  return (
    <div
      className="h-screen bg-cover bg-center p-3 flex flex-col"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=DrM7pyMYJXK1cfPMdlXgKSAvoGrd-JdYQOwa7GaF_dE=')",
      }}
    >
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-purple-600 mb-2 text-center bg-yellow-300 w-1/2 mx-auto py-1 rounded-md">
        Our Core Services
      </h2>

      {/* Left-Right Columns */}
      <div className="flex flex-1 gap-2">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col gap-2">
          {servicesLeft.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-lg border border-gray-300 p-1 shadow-md flex flex-col justify-center flex-1 text-center"
            >
              <h3 className="text-base font-bold">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col gap-2">
          {servicesRight.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-lg border border-gray-300 p-1 shadow-md flex flex-col justify-center flex-1 text-center"
            >
              <h3 className="text-base font-bold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}