import { ShieldCheck, Wifi, Award, Terminal, FileText, CheckCircle2 } from "lucide-react";
import { SiPython } from "react-icons/si";

export default function Certifications() {
  const certifications = [
    {
      title: "AI in Cybersecurity: Vulnerability, Intelligence, Security, and Ethics",
      issuer: "Alison",
      description: "Comprehensive certification covering AI-driven vulnerability assessment, security intelligence, ethical safeguards, and defensive threat modeling.",
      icon: <ShieldCheck className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      tag: "Alison Certified",
      color: "from-indigo-500/10 to-blue-500/10 border-indigo-200 dark:border-indigo-800/60"
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "NPTEL",
      description: "Rigorous certification covering sensor network topologies, microcontroller architectures, IoT protocols, telemetry, and edge-to-cloud connectivity.",
      icon: <Wifi className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
      tag: "NPTEL Certified",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 dark:border-emerald-800/60"
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      description: "Certification in Python programming paradigms, object-oriented concepts, algorithmic problem solving, and standard modular libraries.",
      icon: <SiPython className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />,
      tag: "Infosys Springboard",
      color: "from-yellow-500/10 to-amber-500/10 border-yellow-200 dark:border-yellow-800/60"
    },
    {
      title: "C Programming",
      issuer: "Infosys Springboard",
      description: "Certification covering foundational C systems programming, structured memory management, pointers, and data structures.",
      icon: <Terminal className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      tag: "Infosys Springboard",
      color: "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800/60"
    },
    {
      title: "Technical Articles Author (2 Publications)",
      issuer: "Enginium Annual Magazine (Mody University)",
      description: "Authored and published 2 technical articles in the university’s annual magazine, breaking down complex emerging computer science and AI topics.",
      icon: <FileText className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
      tag: "Publication & Authorship",
      color: "from-rose-500/10 to-pink-500/10 border-rose-200 dark:border-rose-800/60"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Certifications & Publications
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 mb-5"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Recognized industry and academic certifications from Alison, NPTEL, and Infosys Springboard.
          </p>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${item.color} bg-white dark:bg-gray-800/90 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {item.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 pt-3 border-t border-gray-100 dark:border-gray-700/60">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
