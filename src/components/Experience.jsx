import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        id="experience"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h1>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-3 font-semibold">
                <span className="text-lg text-white">{exp.role}</span>{" "}
                <span className="text-base text-neutral-400">
                  @ {exp.company}
                </span>
              </h6>
              <p className="mb-4 leading-relaxed text-neutral-300">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400 transition-colors hover:bg-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
