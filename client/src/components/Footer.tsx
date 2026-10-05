import { Linkedin, Github, ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                AD
              </span>
              <span>Aditi Durgapal</span>
            </h3>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Final-Year B.Tech CSE student specializing in Software Engineering, Backend Architecture, and AI Integration.
            </p>
          </div>

          {/* Social Icons - LinkedIn, GitHub, Email */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/aditi-durgapal-02428826a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-gray-900 hover:bg-blue-600 hover:text-white text-gray-300 border border-gray-800 transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/aditidurgapal-0204/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:text-white text-gray-300 border border-gray-800 transition-all shadow-xs"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:aditidurgapalformal@gmail.com" 
              className="p-3 rounded-xl bg-gray-900 hover:bg-blue-600 hover:text-white text-gray-300 border border-gray-800 transition-all shadow-xs"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 text-xs font-semibold transition-colors shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Aditi Durgapal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
