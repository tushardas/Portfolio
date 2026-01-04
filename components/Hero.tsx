
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-5xl font-bold">Tushar Das</h1>
      <p className="text-xl text-gray-300 mt-4 max-w-2xl">
        Senior Full-Stack Developer building scalable web apps, dashboards,
        APIs, and payment systems.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#contact" className="bg-accent px-6 py-3 rounded font-semibold">
          Hire Me
        </a>
        <a href="#projects" className="border border-gray-700 px-6 py-3 rounded">
          View Projects
        </a>
      </div>
    </motion.section>
  );
}
