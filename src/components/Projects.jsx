import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        id="projects"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {project.image ? (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex items-center"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <img
                    src={project.image}
                    width={200}
                    height={200}
                    className="h-[200px] w-[200px] rounded-lg shadow-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20"
                    alt={project.title}
                  />
                </a>
              </motion.div>
            ) : (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="hidden lg:block lg:w-1/4"
              />
            )}

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className={`w-full max-w-xl ${
                project.image ? "lg:w-3/4" : "lg:w-2/3"
              }`}
            >
              <h6 className="mb-3 text-lg font-bold text-white">
                {project.title}
              </h6>
              <p className="mb-4 leading-relaxed text-neutral-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400 transition-colors hover:bg-neutral-800"
                    key={index}
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

export default Projects;
