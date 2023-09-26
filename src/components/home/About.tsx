import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="max-w-screen-xl px-8 xl:px-16 mx-auto min-h-screen h-full"
      id="about"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className="flex w-full">
          <div className="h-full w-4/5 relative mx-auto">
            <Image
              src="/assets/profile-img.png"
              alt="VPN Illustration"
              quality={100}
              width={412}
              height={283}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
            I am Rajshekhar Das,
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            I am a Full-Stack Developer focusing on Progressive Web Applications
            and Mobile Applications end to end development with over 1+ years
            experience. Having started as a Front-end Developer, I have been
            working with HTML, CSS, Jquery. Then I came to know about these
            awesome frameworks like Express, NextJS AngularJS and ReactJS. Now I
            am also learning Mobile development with ReactNative.
          </p>
          <div className="text-black-500">
            <h2 className="text-xl font-medium mb-2">Skills:</h2>
            <ul className="list-disc list-inside">
              <li>Progressive Web Applications (PWA)</li>
              <li>Mobile Application Development</li>
              <li>HTML, CSS, jQuery</li>
              <li>Express, Next.js, AngularJS, ReactJS</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
