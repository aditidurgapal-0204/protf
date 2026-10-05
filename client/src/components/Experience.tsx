import { Briefcase, Calendar, MapPin, Award, BookOpen, Mic } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Developer – Intern",
      organization: "Acord Engineering",
      type: "Internship",
      period: "Jun 2026 – Aug 2026",
      location: "India",
      icon: <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      points: [
        "Developed and integrated responsive frontend components for internal web applications using React.js.",
        "Built and consumed REST APIs using Node.js and Express.js for application data and CRUD operations.",
        "Worked with SQL database queries to retrieve, update, and manage application records.",
        "Debugged frontend/API issues, conducted API testing using Postman, and used Git/GitHub for version control and collaborative development."
      ],
      skills: ["React.js", "Node.js", "Express.js", "SQL", "REST APIs", "Postman", "Git/GitHub"],
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300"
    },
    {
      role: "Backend Development Intern",
      organization: "Decode Labs",
      type: "Internship",
      period: "Internship",
      location: "Remote",
      icon: <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      points: [
        "Engineered modular backend Python utilities, database scripts, and API components for diverse software tasks.",
        "Implemented object-oriented programming principles and robust error handling across server-side tasks.",
        "Collaborated on software documentation, clean code standards, and version control workflows."
      ],
      skills: ["Python", "Backend Development", "REST APIs", "Data Structures", "Git"],
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300"
    },
    {
      role: "AI Intern",
      organization: "CodeSoft",
      type: "Internship",
      period: "Internship",
      location: "Remote",
      icon: <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      points: [
        "Developed machine learning and artificial intelligence tasks, predictive scripts, and data automation routines.",
        "Implemented algorithmic problem-solving and AI models for practical computational applications.",
        "Strengthened problem-solving proficiency in Python core libraries and script execution."
      ],
      skills: ["Python", "Artificial Intelligence", "Machine Learning", "Data Automation", "Algorithms"],
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300"
    },
    {
      role: "Technical Team Coordinator",
      organization: "Enginium (Mody University)",
      type: "Leadership",
      period: "University Tenured",
      location: "Lakshmangarh, Rajasthan",
      icon: <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      points: [
        "Coordinated the technical team for university technology initiatives, technical sessions, and society events.",
        "Authored and published 2 technical articles in the university’s annual magazine, breaking down complex emerging technology topics."
      ],
      skills: ["Technical Writing", "Team Leadership", "Coordination", "Communication"],
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300"
    },
    {
      role: "Event Anchor & Extra-Curricular",
      organization: "Mody University of Science and Technology",
      type: "Co-Curricular",
      period: "Flagship Events",
      location: "Lakshmangarh, Rajasthan",
      icon: <Mic className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      points: [
        "Hosted the Alumni Meet and Farewell Ceremony at Mody University, engaging large audiences and managing stage proceedings.",
        "Former Member of the BIS Drama Society, participating in theatrical productions and university cultural events."
      ],
      skills: ["Public Speaking", "Stage Management", "Audience Engagement", "Communication"],
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50/60 dark:bg-gray-800/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Experience & Leadership
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 mb-5"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Practical software development internships and university leadership roles demonstrating technical craftsmanship and impact.
          </p>
        </div>

        {/* Timeline / Card List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-100 dark:border-gray-600/50 mt-1">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className={`px-2.5 py-1 rounded-full font-semibold border ${exp.badgeColor}`}>
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 list-disc list-inside">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="pl-1">
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
