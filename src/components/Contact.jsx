import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: <FaEnvelope className="text-2xl" />,
      link: "mailto:shiyuanm000@gmail.com",
      text: "Send me an email",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/sean698",
      text: "Follow me on GitHub",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/shiyuan-miao-5b870a193/",
      text: "Connect on LinkedIn",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          Contact
        </span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col gap-6">
          {contactLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-neutral-300 hover:text-purple-400 transition-colors duration-300 group"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-lg font-medium">{item.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
