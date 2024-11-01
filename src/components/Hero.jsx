import { useState, useEffect } from "react";
import { ROLES } from "../constants";
import profilePic from "../assets/profilePic.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

const xTransitionContainer = ({ hiddenX = -100, duration = 0.5, delay }) => ({
  hidden: { x: hiddenX, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration, delay },
  },
});

const Hero = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-5/12">
          <div className="flex flex-col w-full">
            {/* <motion.h1
              variants={xTransitionContainer({ delay: 0 })}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-bold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Hi, I am Shiyuan Miao
            </motion.h1> */}
            <motion.div
              variants={xTransitionContainer({ delay: 0 })}
              initial="hidden"
              animate="visible"
              className="text-4xl mt-16 mb-6"
            >
              Hi, I am
              <h1 className="text-6xl font-bold tracking-tight lg:mt-4 lg:text-6xl">
                Shiyuan Miao
              </h1>
            </motion.div>
            <motion.div
              variants={xTransitionContainer({ delay: 0.5 })}
              initial="hidden"
              animate="visible"
              className=""
            >
              <div className="flex text-4xl tracking-tight">
                I am a
                <p className="ml-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                  {startTyping && (
                    <Typewriter
                      options={{
                        strings: ROLES,
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        deleteSpeed: 40,
                      }}
                    />
                  )}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-16"
              variants={xTransitionContainer({ delay: 1 })}
              initial="hidden"
              animate="visible"
            >
              <a
                href="/src/assets/Resume_Shiyuan_Miao.pdf"
                download="Resume_Shiyuan_Miao.pdf"
              >
                <AnimatedSubscribeButton
                  buttonColor="#301E67"
                  buttonTextColor="#ffffff"
                  subscribeStatus={false}
                  initialText={
                    <span className="group inline-flex items-center">
                      Get My Resume{" "}
                      <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  }
                  changeText={
                    <span className="group inline-flex items-center">
                      <CheckIcon className="mr-2 size-4" />
                      Thank you!{" "}
                    </span>
                  }
                />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 lg:p-8 mt-20">
          <div className="flex justify-center">
            <motion.img
              variants={xTransitionContainer({
                hiddenX: 100,
                duration: 1,
                delay: 1.3,
              })}
              initial="hidden"
              animate="visible"
              // initial={{ x: 100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{ duration: 1, delay: 1.3 }}
              src={profilePic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
