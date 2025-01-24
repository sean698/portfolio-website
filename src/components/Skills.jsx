import { RiReactjsLine as ReactJs } from "react-icons/ri";
import { FaNodeJs as NodeJs } from "react-icons/fa";
import { BiLogoPostgresql as PostgreSQL } from "react-icons/bi";
import { IoLogoFirebase as Firebase } from "react-icons/io5";
import { SiTypescript as TS } from "react-icons/si";
import { FaHtml5 as HTML } from "react-icons/fa";
import { FaDocker as Docker } from "react-icons/fa";
import { motion } from "framer-motion";

const logoContainerStyles = "rounded-2xl border-4 border-neutral-800 p-4";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        id="skills"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <ReactJs className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <HTML className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <TS className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <NodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <Docker className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <Firebase className="text-7xl text-amber-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className={logoContainerStyles}
        >
          <PostgreSQL className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
