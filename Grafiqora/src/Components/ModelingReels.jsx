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
    <div className="w-full min-h-[100vh] bg-[#f0f4f8] flex flex-col items-center px-4 sm:px-6 lg:px-12 py-6 space-y-8">

      {/* Title */}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center
               text-black bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400
               py-5 px-6 rounded-2xl shadow-lg tracking-wide">
  MODELING & REELS CREATION
</h2>

      {/* Services */}
      <div className="w-full flex flex-col gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl overflow-hidden shadow-xl"
          >
            {/* Image Section */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">

              {/* Blurred Background */}
              <img
                src={service.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
              />

              {/* Main Image */}
              <img
                src={service.img}
                alt={service.title}
                className="relative w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="bg-white py-5 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                {service.title}
              </h3>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}