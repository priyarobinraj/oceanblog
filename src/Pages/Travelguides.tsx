import React from "react";

const Travelguides: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div
          className="head text-white px-9"
          style={{
            backgroundImage: "url(/images/banner2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="py-60 flex flex-col gap-7">
            <h1 className="font-bold text-5xl">Explore the Depths </h1>
            <p className="font-sans text-xl">
              Your gateway to the world's most breathtaking oceanic adventures.{" "}
            </p>
          </div>
        </div>
        <section className="flex flex-col gap-10">
          <div className="flex flex-row gap-2 px-9">
            <div
              className="text-white py-40 text-center"
              style={{
                backgroundImage: "url('/images/amalfi.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-3xl font-bold pb-5">Amalfi</h2>
              <p className="text-lg ">
                The Amalfi Coast’s beauty lies in its breathtaking ocean vistas,
                where turquoise waters meet dramatic, cliffside villages like
                Positano and Amalfi, cascading with colorful houses. Its rugged
                coastline, framed by lush lemon groves and fragrant gardens,
                creates a postcard-perfect landscape.
              </p>
            </div>
            <div
              className="text-white py-40 text-center"
              style={{
                backgroundImage: "url('/images/maldives.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-3xl font-bold pb-5">Maldives</h2>
              <p>
                Experience the pristine beauty of the Maldives, where
                crystal-clear waters meet white sandy beaches. This tropical
                paradise offers an unforgettable escape for relaxation and
                adventure.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2 px-9">
            <div
              className="text-white py-40 text-center"
              style={{
                backgroundImage: "url('/images/bora bora.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-3xl font-bold pb-5">Bora Bora</h2>
              <p className="text-lg ">
                Indulge in the ultimate luxury experience in Bora Bora, where
                turquoise lagoons and overwater bungalows create an idyllic
                setting for romance and relaxation.
              </p>
            </div>
            <div
              className="text-white py-40 text-center w-2/3"
              style={{
                backgroundImage: "url('/images/venice.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-3xl font-bold pb-5">Venice</h2>
              <p>
                Experience the pristine beauty of the Venice, where
                crystal-clear waters meet white sandy beaches. This tropical
                paradise offers an unforgettable escape for relaxation and
                adventure.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Travelguides;
