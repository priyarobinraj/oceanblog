import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div
        className="head text-white px-2 xs:px-4 sm:px-6 md:px-9"
        style={{
          backgroundImage: "url('/images/home_bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-16 xs:py-24 sm:py-36 md:py-48 flex flex-col gap-2 xs:gap-3 text-center xs:text-left">
          <p className="font-sans text-sm xs:text-base sm:text-lg md:text-xl">
            Explore the breathtaking beauty and adventures that the world's
            oceans have to offer, from serene beach getaways to thrilling marine
            explorations.
          </p>
          <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
            Dive into the Wonders of the Ocean
          </h1>
          <div className="flex justify-center xs:justify-start pt-4 xs:pt-6 sm:pt-8 md:pt-10">
            <a
              href=""
              className="bg-black text-base xs:text-lg sm:text-xl md:text-2xl inline-block py-1 xs:py-2 px-2 xs:px-4 rounded-lg hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col xs:flex-col xs:items-center sm:flex-row justify-start gap-4 xs:gap-6 sm:gap-12 px-2 xs:px-4 sm:px-6 md:pl-9 py-4 xs:py-6 sm:py-8"
        id="home"
      >
        <div className="w-full xs:w-4/5 sm:w-96">
          <img
            src="/images/Underwater Scuba Dive.jpeg"
            alt="scuba"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full xs:w-full sm:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold pb-2 xs:pb-3">
            Unforgettable Ocean Destinations
          </h2>
          <p className="mt-1 xs:mt-2 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg">
            Discover the most breathtaking places around the globe where you can
            immerse yourself in the beauty of the ocean. From the crystal-clear
            waters of the Caribbean to the rugged coastlines of the Pacific, we
            guide you to your next dream destination.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-4 xs:py-6 sm:py-7 px-2 xs:px-4 sm:px-6 md:pl-9">
        <div className="pb-4 xs:pb-6 sm:pb-10 text-center">
          <h2 className="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl pb-2 xs:pb-3 sm:pb-5">
            Essential Ocean Travel Tips
          </h2>
          <p className="mx-auto w-full xs:w-full sm:w-3/4 md:w-2/3 text-xs xs:text-sm sm:text-base md:text-lg">
            Maximize your adventure with these practical tips tailored for ocean
            travelers. Whether you are a seasoned voyager or planning your first
            trip, our advice will ensure a smooth and enjoyable experience.
          </p>
        </div>
        <div className="flex flex-col gap-6 xs:gap-8 sm:gap-12">
          <div className="flex flex-col xs:flex-col sm:flex-row w-full xs:w-full sm:w-5/6 mx-auto gap-4 xs:gap-6 sm:gap-10 md:gap-40">
            <img
              src="/images/img_1.webp"
              alt="img1"
              className="w-full xs:w-2/3 sm:w-60  rounded-lg mx-auto"
            />
            <div className="w-full xs:w-full sm:w-1/2 flex flex-col gap-2 xs:gap-3 sm:gap-4 justify-center items-center text-center">
              <h3 className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl">
                Pack Smart for the Ocean
              </h3>
              <p className="text-xs xs:text-sm sm:text-lg md:text-xl">
                When preparing for an ocean trip, packing the right gear is
                crucial. Always include essentials like sunscreen, water shoes,
                and a reusable water bottle.
              </p>
            </div>
          </div>
          <div className="flex flex-col xs:flex-col sm:flex-row-reverse w-full xs:w-full sm:w-5/6 mx-auto gap-4 xs:gap-6 sm:gap-10 md:gap-40">
            <img
              src="/images/img_2.webp"
              alt="img2"
              className="w-full xs:w-2/3 sm:w-60 h-auto rounded-lg mx-auto"
            />
            <div className="w-full xs:w-full sm:w-1/2 flex flex-col gap-2 xs:gap-3 sm:gap-4 justify-center items-center text-center">
              <h3 className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl">
                Stay Safe While Exploring
              </h3>
              <p className="text-xs xs:text-sm sm:text-lg md:text-xl">
                Safety should always come first during your travels. Familiarize
                yourself with local guidelines and keep an eye on weather
                conditions.
              </p>
            </div>
          </div>
          <div className="flex flex-col xs:flex-col sm:flex-row w-full xs:w-full sm:w-5/6 mx-auto gap-4 xs:gap-6 sm:gap-10 md:gap-40">
            <img
              src="/images/img_3.webp"
              alt="img3"
              className="w-full xs:w-2/3 sm:w-60 h-auto rounded-lg mx-auto"
            />
            <div className="w-full xs:w-full sm:w-1/2 flex flex-col gap-2 xs:gap-3 sm:gap-4 justify-center items-center text-center">
              <h3 className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl">
                Respect Marine Life
              </h3>
              <p className="text-xs xs:text-sm sm:text-lg md:text-xl">
                When interacting with marine life, maintain a respectful
                distance and avoid touching or disturbing the animals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
