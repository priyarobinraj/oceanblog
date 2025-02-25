import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div
        className="head text-white px-9"
        style={{
          backgroundImage: "url('/images/home_bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-48 flex flex-col gap-3">
          <p className="font-sans text-xl">
            Explore the breathtaking beauty and adventures that the world's
            oceans have to offer, from serene beach getaways to thrilling marine
            explorations.
          </p>
          <h1 className="font-bold text-5xl">
            Dive into the Wonders of the Ocean
          </h1>
          <div className="flex justify-start pt-10">
            <a
              href=""
              className="bg-black text-2xl inline-block py-2 px-4 rounded-lg hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-12 pl-9 " id="home">
        <div className="w-96">
          <img src="/images/Underwater Scuba Dive.jpeg" alt="scuba" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold pb-3">
            Unforgettable Ocean Destinations
          </h2>
          <p className="mt-4 text-lg">
            Discover the most breathtaking places around the globe where you can
            immerse yourself in the beauty of the ocean. From the crystal-clear
            waters of the Caribbean to the rugged coastlines of the Pacific, we
            guide you to your next dream destination. Whether you're seeking
            serene beach getaways, adventurous scuba diving spots, or vibrant
            coral reefs teeming with marine life, the ocean holds an endless
            array of wonders waiting to be explored. Imagine the warm sun on
            your skin as you walk along the pristine sands of hidden islands, or
            the exhilarating feeling of plunging into deep blue waters,
            surrounded by exotic sea creatures. The oceans offer more than just
            scenic beauty—they provide unforgettable experiences, from thrilling
            water sports to tranquil boat rides, each destination offering
            something unique for every type of traveler.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-7 pl-9">
        <div className="pb-10">
          <h2 className="text-center font-extrabold text-4xl pb-5">
            Essential Ocean Travel Tips
          </h2>
          <p className="text-center mx-auto w-2/3 text-lg ">
            Maximize your adventure with these practical tips tailored for ocean
            travelers. Whether you are a seasoned voyager or planning your first
            trip, our advice will ensure a smooth and enjoyable experience.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-row w-5/6 mx-auto gap-40">
            <img src="/images/img_1.webp" alt="img1" className="w-60" />
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center text-center">
              <h3 className="font-bold text-3xl">Pack Smart for the Ocean</h3>
              <p className=" text-xl">
                When preparing for an ocean trip, packing the right gear is
                crucial. Always include essentials like sunscreen, water shoes,
                and a reusable water bottle to stay hydrated and protect your
                skin from sun damage.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse w-5/6 mx-auto gap-40">
            <img src="/images/img_2.webp" alt="img2" className="w-60" />
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center text-center">
              <h3 className="font-bold text-3xl">Stay Safe While Exploring</h3>
              <p className=" text-xl">
                Safety should always come first during your travels. Familiarize
                yourself with local guidelines, keep an eye on weather
                conditions, and never venture into the water alone to ensure a
                safe and enjoyable experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-5/6 mx-auto gap-40">
            <img src="/images/img_3.webp" alt="img3" className="w-60" />
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center text-center">
              <h3 className="font-bold text-3xl">Respect Marine Life</h3>
              <p className=" text-xl">
                When interacting with marine life, remember to maintain a
                respectful distance and avoid touching or disturbing the
                animals. Observing from afar helps preserve their natural
                behaviors and contributes to a healthier ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
