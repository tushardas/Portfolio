import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Das | Full Stack Developer</title>
        <meta name="description" content="Senior full-stack developer building scalable web apps, APIs, dashboards and payment systems." />
        <meta property="og:title" content="Tushar Das | Full Stack Developer" />
        <meta property="og:description" content="React, Next.js, Node.js, Golang — production-grade systems." />
        <meta property="og:image" content="/og.png" />
      </Head>

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        {/* <About /> */}
        <Tech />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  );
}