import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Tushar Das</h1>

        <p className="text-xl text-gray-300 mt-4 max-w-3xl">
          Senior Full-Stack Developer with <strong>7+ years</strong> of experience, building scalable
          web apps, dashboards, APIs, and payment systems. <br/><br/> I’ve worked across startups,
          enterprises, and freelance projects, delivering production systems in
          e-commerce, workflow automation, platform frameworks, and service marketplaces.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="bg-accent px-6 py-3 rounded font-semibold"
          >
            Hire Me
          </a>
           <a href="#projects" className="border border-gray-700 px-6 py-3 rounded">
          View Projects
        </a>
          <a
            href="/Tushar_Das_Resume.pdf"
            download
            className="border border-gray-700 px-6 py-3 rounded font-semibold hover:bg-white/5 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
