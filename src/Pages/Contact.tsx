import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <div
        className="head text-white px-9"
        style={{
          backgroundImage: "url('/src/images/con_bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-48 flex flex-col gap-9">
          <h1 className="font-bold text-5xl">Get in Touch with Us </h1>
          <p className="font-sans text-2xl">
            Your gateway to ocean adventures and travel insights
          </p>
          <div className="flex justify-start pt-10"></div>
        </div>
      </div>
      <section className=" text-black  ">
        <div className="text-center flex flex-col gap-2 pb-10">
          <h2 className="font-extrabold text-4xl">Our Location and Hours</h2>
          <p className="text-xl">We welcome you to explore our space </p>
        </div>
        <div className="flex flex-row gap-20 text-center justify-center ">
          <div className="flex flex-col items-center bg-white text-black px-5 py-4 border-2 border-gray-400">
            <img
              src="/src/images/loc1.webp"
              alt="about1 img"
              className="w-64 "
            />
            <h3 className="font-bold pb-2 text-xl">Location</h3>
            <p className="w-48">
              Our office is located in the heart of the coastal city, just a
              short walk from the beach. You'll find us at 123 Ocean Avenue,
              where the sound of the waves inspires our work. We encourage you
              to stop by and immerse yourself in the oceanic atmosphere as we
              discuss your travel plans and ocean interests.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black px-5 py-4 border-2 border-gray-400">
            <img
              src="/src/images/loc2.webp"
              alt="about2 img"
              className="w-64"
            />
            <h3 className="font-bold pb-2 text-xl w-56">Business Hours</h3>
            <p className="w-48">
              We are open from Monday to Friday, 9 AM to 5 PM, ensuring that we
              are available to assist you during your busy week. On weekends,
              our office is closed, allowing our team to recharge and explore
              the very oceans we passionately write about. Feel free to reach
              out via email or phone outs
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black px-5 py-4 border-2 border-gray-400">
            <img
              src="/src/images/loc3.webp"
              alt="about3 img"
              className="w-64"
            />
            <h3 className="font-bold pb-2 text-xl w-56">Parking Information</h3>
            <p className="w-56">
              Ample parking is available in the vicinity of our office, making
              it convenient for you to visit us. There are both street parking
              options and dedicated lots nearby. We recommend arriving a few
              minutes early to secure a spot so you can fully enjoy your time
              with us discussing ocean travel and adventures.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center ">
          <h2 className="font-extrabold text-4xl pb-3">Contact Us Anytime</h2>
          <p className=" text-xl">
            We are here to assist you with your ocean-related queries
          </p>
        </div>
        <div className="max-w-lg mx-auto px-4 mt-8">
          <form
            action="/submit" // Replace with actual form submission endpoint or handle with a function
            method="post"
            className="space-y-6 bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full max-w-xs bg-black text-white py-3 px-6 rounded-md hover:bg-gray-500 hover:text-black "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      ;
    </>
  );
};

export default Contact;
