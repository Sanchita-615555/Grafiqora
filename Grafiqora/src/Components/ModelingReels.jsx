import React from "react";

export default function ModelingReels() {
  const services = [
    { title: "Model Photography", img: "https://media.istockphoto.com/id/1280349927/photo/lets-start-a-baby-hair-challenge.jpg?b=1&s=612x612&w=0&k=20&c=tufAALhecCqAEjgI944bQ7XyyYPkQoDaImCiIli1GBU=" },
    { title: "Instagram Reels", img: "https://media.istockphoto.com/id/1175594079/photo/indian-woman-vlogging-traditional-dance-routine-and-clothing.jpg?b=1&s=612x612&w=0&k=20&c=jMHUm4jbdqI94pCphuNnWUn_ekSC7b1c_7ZS9DV2ePI=" },
    { title: "YouTube Shorts", img: "https://images.pexels.com/photos/12432855/pexels-photo-12432855.jpeg" },
    { title: "Facebook Reels", img: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg" },
  ];

  return (
    <div className="h-screen bg-[#FFF6E6] flex flex-col p-4 box-border">
      {/* Heading */}
      <h2
        className="text-2xl font-bold text-center bg-amber-400 flex items-center justify-center"
        style={{ height: "20%" }}
      >
        MODELING & REELS CREATION
      </h2>

      {/* Cards */}
      <div className="flex justify-between flex-1 mt-2" style={{ height: "80%" }}>
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-1/4 h-full px-1 box-border">
            {/* Image */}
            <div className="w-full h-5/6 overflow-hidden rounded-lg shadow-lg">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Title below image */}
            <div className="mt-2 px-1 py-1 bg-white rounded-lg shadow-sm text-center text-gray-800 font-medium w-full h-8 truncate text-sm">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}