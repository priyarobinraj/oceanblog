import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-14">
        <div
          className="head text-black px-9"
          style={{
            backgroundImage: "url('../images/banner.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="py-60 flex flex-col gap-7">
            <h1 className="font-bold text-5xl">Discover Ocean Blog </h1>
            <p className="font-sans text-xl">
              Your gateway to ocean exploration and travel
            </p>
          </div>
        </div>
        <section>
          <div className=" text-black py-7 pl-9">
            <div className="pb-10">
              <h2 className="text-center font-extrabold text-4xl pb-2">
                Our Passionate Team
              </h2>
              <p className="text-center mx-auto w-2/3 text-lg ">
                Driven by a love for oceans and travel
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row w-5/6 mx-auto gap-40">
                <img src="/images/img1.webp" alt="img1" className="w-60" />
                <div className="w-1/2 flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="font-bold text-3xl">John Doe - Founder</h3>
                  <p className=" text-xl">
                    As the founder of Ocean Blog, John brings a wealth of
                    experience in marine biology and conservation. His passion
                    for the ocean inspires every aspect of our platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse w-5/6 mx-auto gap-40">
                <img src="/images/img2.webp" alt="img2" className="w-60" />
                <div className="w-1/2 flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="font-bold text-3xl">
                    Jane Smith - Content Editor
                  </h3>
                  <p className=" text-xl">
                    Jane, our content editor, has a background in environmental
                    journalism. She is dedicated to producing high-quality
                    articles that resonate with our audience and promote ocean
                    awareness.
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-5/6 mx-auto gap-40">
                <img src="/images/img3.webp" alt="img3" className="w-60" />
                <div className="w-1/2 flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="font-bold text-3xl">
                    Emily Johnson - Community Manager
                  </h3>
                  <p className=" text-xl">
                    Emily is our community manager, fostering connections with
                    our readers and partners. Her enthusiasm for engaging
                    discussions and events helps build a vibrant ocean-loving
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 text-white py-8 ">
          <div className="text-center flex flex-col gap-2 pb-10">
            <h2 className="font-extrabold text-4xl">
              Our Impactful Initiatives
            </h2>
            <p className="text-xl">
              Reflecting on our journey towards ocean advocacy
            </p>
          </div>
          <div className="flex flex-row gap-20 text-center justify-center ">
            <div className="flex flex-col items-center bg-white text-black px-5 py-4 border-2 border-gray-400">
              <img
                src="/images/about1.webp"
                alt="about1 img"
                className="w-64 "
              />
              <h3 className="font-bold pb-2 text-xl">
                Beach Clean-Up Campaign
              </h3>
              <p className="w-48">
                In our recent Beach Clean-Up Campaign, we mobilized volunteers
                across multiple coastal locations to remove debris and plastic
                waste. This initiative not only beautified the beaches but also
                raised awareness about ocean pollution, engaging the community
                in a meaningful way.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white text-black px-5 py-4 border-2 border-gray-400">
              <img
                src="/images/about2.webp"
                alt="about2 img"
                className="w-64"
              />
              <h3 className="font-bold pb-2 text-xl w-56">
                Marine Wildlife Conservation Project
              </h3>
              <p className="w-48">
                Our Marine Wildlife Conservation Project focused on protecting
                endangered species through education and habitat restoration.
                Collaborating with local organizations, we implemented programs
                that fostered understanding and support for marine life
                conservation efforts.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white text-black px-5 py-4 border-2 border-gray-400">
              <img
                src="/images/about3.webp"
                alt="about3 img"
                className="w-64"
              />
              <h3 className="font-bold pb-2 text-xl w-56">
                Sustainable Travel Workshops
              </h3>
              <p className="w-56">
                We hosted a series of Sustainable Travel Workshops aimed at
                educating travelers about eco-friendly practices. These
                workshops provided valuable insights into minimizing one’s
                carbon footprint while exploring beautiful ocean destinations,
                promoting responsible tourism.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
