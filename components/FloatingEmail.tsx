export default function FloatingEmail() {
  return (
    <a
      href="mailto:tushar.das5@gmail.com?subject=Freelance%20Project%20Inquiry&body=Hi%20Tushar,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
      className="
        fixed bottom-6 right-6 z-50
        bg-accent text-white
        px-5 py-3 rounded-full
        shadow-lg
        font-semibold
        flex items-center gap-2
        hover:scale-105 hover:opacity-90
        transition
      "
      aria-label="Email Me"
    >
      ✉️ Email Me
    </a>
  );
}
