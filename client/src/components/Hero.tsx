import { useState } from "react";
import { ChevronDown, ArrowRight, FileText } from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-blue-50/60 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 overflow-hidden py-16 sm:py-24">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-400/15 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">
                Final-Year B.Tech CSE • Open to Software & AI Roles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Aditi Durgapal
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-5">
              Software Engineer & AI Enthusiast
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Final-year Computer Science student at <span className="font-semibold text-gray-900 dark:text-white">Mody University of Science and Technology</span> (CGPA: 8.04/10). Passionate about architecting intelligent, full-stack AI platforms, scalable backend services, and clean algorithmic code.
            </p>

            {/* CTA Buttons - View Projects & Resume only */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-12">
              <a
                href="#projects"
                onClick={handleNavClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Resume / CV</span>
                </button>
              )}
            </div>

            {/* Quick Metrics Bento Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-gray-200/80 dark:border-gray-800">
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">8.04</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">B.Tech CGPA</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">3+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">Tech Internships</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">3+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">Featured Projects</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">3+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Tech Card with Avatar */}
          <div className="w-full max-w-sm lg:max-w-md flex justify-center">
            <div className="relative group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                {/* Avatar */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto mb-4">
                  {!imgError ? (
                    <img
                      src="https://avatars.githubusercontent.com/u/197926008?v=4"
                      alt="Aditi Durgapal"
                      onError={() => setImgError(true)}
                      className="w-full h-full rounded-2xl object-cover border-2 border-white dark:border-gray-700 shadow-xl"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-5xl font-black shadow-xl">
                      AD
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Aditi Durgapal</h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-1">B.Tech CSE • Mody University</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ghaziabad, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          onClick={handleNavClick}
          className="p-2 rounded-full text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
