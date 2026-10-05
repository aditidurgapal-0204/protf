import { useState } from "react";
import { ExternalLink, Github, Sparkles, Bot, MapPin, Compass, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  period: string;
  badge: string;
  badgeColor: string;
  description: string;
  points: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: JSX.Element;
  featured?: boolean;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai-web" | "ml-python">("all");

  const projects: Project[] = [
    {
      title: "AI Placement Mentor",
      subtitle: "Full-Stack AI Web Application",
      period: "Feb 2026 – Apr 2026",
      badge: "Featured Flagship",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      description: "An AI-powered placement platform generating personalized preparation roadmaps, ATS resume feedback, and interview coaching from student profiles and resumes.",
      points: [
        "Built an AI-powered placement platform generating personalized roadmaps, ATS resume feedback, and interview preparation guidance from student profiles and resumes.",
        "Implemented secure authentication, AI integration, REST APIs, database operations, and scalable backend architecture for the full-stack application.",
        "Developed 10+ integrated modules enabling personalized evaluation across 8+ placement parameters, delivering an end-to-end AI-driven workflow."
      ],
      techStack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Gemini AI"],
      githubUrl: "https://github.com/aditidurgapal-0204/AI-Placement-Mentor",
      liveUrl: "https://ai-placementmentor.vercel.app/",
      icon: <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      featured: true,
    },
    {
      title: "ModyMap",
      subtitle: "Campus Navigation Web Application",
      period: "Jul 2025 – Oct 2025",
      badge: "Web GIS Application",
      badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "A web-based campus navigation platform that enables students, faculty, and campus visitors to locate university buildings and facilities via an interactive digital map.",
      points: [
        "Built a web-based campus navigation platform helping students, faculty, and visitors locate campus buildings and facilities through an interactive digital map.",
        "Integrated OpenStreetMap APIs to enable interactive map-based navigation and route visualization with a responsive Flask-based web interface.",
        "Designed a scalable architecture supporting 50+ campus locations through a centralized navigation platform."
      ],
      techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "OpenStreetMap"],
      githubUrl: "https://github.com/aditidurgapal-0204",
      icon: <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "TREKKA",
      subtitle: "ML-Based Travel Recommendation System",
      period: "Jan 2025 – Mar 2025",
      badge: "Machine Learning",
      badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      description: "An ML-powered recommendation system generating tailored travel destinations using content-based filtering algorithms and vector cosine similarity.",
      points: [
        "Built an ML-based travel recommendation system generating personalized destination recommendations using content-based filtering and cosine similarity.",
        "Implemented data preprocessing, feature engineering, and similarity computation through a Flask-based web application.",
        "Developed a recommendation pipeline integrating 5+ processing stages, from raw data preprocessing to personalized recommendation delivery."
      ],
      techStack: ["Python", "Flask", "Machine Learning", "Content-Based Filtering", "Cosine Similarity"],
      githubUrl: "https://github.com/aditidurgapal-0204",
      icon: <Compass className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : activeFilter === "ai-web"
    ? projects.filter(p => p.techStack.includes("Next.js") || p.techStack.includes("HTML"))
    : projects.filter(p => p.techStack.includes("Python") || p.techStack.includes("Machine Learning"));

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900/90 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Projects & Technical Contributions
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 mb-5"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Practical full-stack web platforms, campus navigation systems, and machine learning recommendation engines.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("ai-web")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === "ai-web"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Web & AI Platforms
            </button>
            <button
              onClick={() => setActiveFilter("ml-python")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === "ml-python"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Python & Machine Learning
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500/50 ${
                project.featured ? "ring-1 ring-blue-500/30" : ""
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600/50 group-hover:scale-105 transition-transform">
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 list-disc list-inside">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="pl-1">
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 group-hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
