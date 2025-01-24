import { motion } from "framer-motion";

const About = () => {
  const beforeText =
    "I am a passionate full-stack developer with a strong focus on building practical solutions that solve real-world problems. I independently developed and currently operate ";
  const collectlyText = "Collectly (collectly.me)";
  const afterText =
    ", a growing housing platform that automatically aggregates rental listings across multiple websites in Greater Vancouver area. With two years of hands-on experience in modern web technologies, I enjoy creating efficient, user-centered applications that make a meaningful impact. Beyond coding, I'm driven by continuous learning and taking on new challenges in software development.";

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        id="about"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-3/4"
        >
          <div className="flex justify-center items-center">
            <p className="my-2 text-center text-lg py-6">
              {beforeText}
              <a
                href="https://collectly.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
              >
                {collectlyText}
              </a>
              {afterText}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
