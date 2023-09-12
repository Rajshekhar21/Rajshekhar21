import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { getScrollAnimation } from "@/utils/Animations";
import ScrollAnimationWrapper from "@/elements/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl pt-32 px-8 xl:px-16 mx-auto min-h-screen h-full"
      id="about"
    >
      <ScrollAnimationWrapper className="scroll-animation-wrapper">
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
              Hey, Welcome to My Portfolio
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              I am a Full-Stack Developer focusing on Progressive Web Applications and Mobile
              Applications end to end development with over 1+ years experience.
              Having started as a Front-end Developer, I have been working with HTML, CSS, Jquery.
              Then I came to know about these awesome frameworks like Express, NextJS
              AngularJS and ReactJS. Now I am also learning Mobile development with ReactNative.
            </p>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/hero.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
