import React from "react";

export default function ModelingReels() {
  const services = [
    {
      title: "Model Photography",
      img: "https://media.istockphoto.com/id/1280349927/photo/lets-start-a-baby-hair-challenge.jpg?b=1&s=612x612&w=0&k=20&c=tufAALhecCqAEjgI944bQ7XyyYPkQoDaImCiIli1GBU=",
    },
    {
      title: "Instagram Reels",
      img: "https://media.istockphoto.com/id/1175594079/photo/indian-woman-vlogging-traditional-dance-routine-and-clothing.jpg?b=1&s=612x612&w=0&k=20&c=jMHUm4jbdqI94pCphuNnWUn_ekSC7b1c_7ZS9DV2ePI=",
    },
    {
      title: "YouTube Shorts",
      img: "https://images.pexels.com/photos/12432855/pexels-photo-12432855.jpeg",
    },
    {
      title: "Facebook Reels",
      img: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center p-6 space-y-8">
     <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6
               text-[#F5C77A] bg-black py-5 px-6 rounded-2xl shadow-lg tracking-wide">
  MODELING & REELS CREATION
</h2>



      <div className="w-full max-w-5xl flex flex-col gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full h-[60vh] md:h-[70vh] rounded-lg overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl md:text-4xl font-bold text-white text-center p-4 bg-black/60 rounded shadow-lg">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
