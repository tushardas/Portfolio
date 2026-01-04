import Section from "./Section";

export default function Contact() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <p className="text-gray-300 max-w-xl mb-6">
        Have a project in mind or need help building something reliable?
        Drop me an email and I’ll get back to you.
      </p>

      <a
        href="mailto:tushar.das5@gmail.com?subject=Freelance%20Project%20Inquiry&body=Hi%20Tushar,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
        className="inline-flex items-center gap-3 bg-accent px-6 py-3 rounded font-semibold hover:opacity-90 transition"
      >
        ✉️ tushar.das5@gmail.com
      </a>
    </Section>
  );
}
