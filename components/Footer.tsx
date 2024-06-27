import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "take",
    },
    {
      text: "your",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "digital",
    },
    {
      text: "presence",
    },
    {
      text: "to",
    },
    {
      text: "next",
    },
    {
      text: "level?",
    },
  ];

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <TypewriterEffect words={words} />
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:harale.y@northeastern.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {currentyear} Yash Harale
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-10 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
