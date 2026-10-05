import { Terminal, Cpu, Database, Wrench, Globe, CheckCircle2, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description: "Core languages for object-oriented software engineering, algorithmic development, and database queries.",
      skills: ["Java", "Python", "SQL"],
      color: "from-blue-500/10 to-indigo-500/10 border-blue-200 dark:border-blue-900/40"
    },
    {
      title: "Core Computer Science",
      icon: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      description: "Fundamental principles for efficient memory utilization, clean OOP design, and robust algorithm construction.",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)"],
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 dark:border-emerald-900/40"
    },
    {
      title: "Coursework & Databases",
      icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      description: "Relational database architecture, structured query operations, and network protocol foundations.",
      skills: ["DBMS", "Computer Networks", "PostgreSQL", "SQL CRUD Operations"],
      color: "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-900/40"
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      description: "Standard developer environments, testing tools, and version control systems.",
      skills: ["VS Code", "IntelliJ IDEA", "IDLE", "Postman (API Testing)", "Git & GitHub"],
      color: "from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-900/40"
    },
    {
      title: "Web & AI Integration",
      icon: <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      description: "Full-stack web frameworks, scalable REST API pipelines, and generative AI model integrations.",
      skills: ["React.js", "Node.js", "Express.js", "Flask", "REST APIs", "Next.js", "Prisma ORM", "Gemini AI"],
      color: "from-cyan-500/10 to-blue-500/10 border-cyan-200 dark:border-cyan-900/40"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50/70 dark:bg-gray-800/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 mb-5"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Core programming languages, CS fundamentals, database systems, developer tools, and full-stack frameworks from my resume.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-800 border ${category.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-100 dark:border-gray-600/50">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200/80 dark:border-gray-600/50 transition-colors text-xs font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in projects & internships</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
