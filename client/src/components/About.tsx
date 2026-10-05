import { GraduationCap, BookOpen, Mic, Sparkles, CheckCircle2, Theater } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About Me & Academic Journey
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 mb-5"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Engineering software solutions with an AI-first mindset, combining algorithmic rigor with practical application.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Main Story (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Software Developer & Computer Science Student
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  I am a final-year <strong className="text-blue-600 dark:text-blue-400 font-semibold">B.Tech Computer Science</strong> student at <strong className="text-gray-900 dark:text-white font-medium">Mody University of Science and Technology, Lakshmangarh, Rajasthan</strong> (Aug 2023 – May 2027), with a cumulative CGPA of <strong className="text-blue-600 dark:text-blue-400 font-semibold">8.04 / 10</strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  With hands-on experience in software development through internships and projects, I am skilled in <span className="text-gray-900 dark:text-white font-medium">Java, Python, SQL, REST APIs, PostgreSQL, and AI integration</span>. I maintain a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, and database development with a focus on building practical, scalable software solutions.
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Object-Oriented Programming</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>REST API & Backend</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>AI & LLM Integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>DBMS & PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Technical Writing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards & Stats (5 columns) */}
          <div className="lg:col-span-5 space-y-5">
            {/* University & CGPA Bento */}
            <div className="p-6 sm:p-7 rounded-3xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 shadow-sm flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Education (Aug 2023 – May 2027)
                </span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">
                  Bachelor of Technology in Computer Science
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Mody University of Science and Technology, Lakshmangarh, Rajasthan
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 text-xs font-semibold">
                  <span>CGPA: 8.04 / 10.0</span>
                </div>
              </div>
            </div>

            {/* Leadership & Publications Bento */}
            <div className="p-6 sm:p-7 rounded-3xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50 shadow-sm flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-purple-600 text-white shadow-md shadow-purple-500/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Leadership & Publications
                </span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">
                  Technical Coordinator @ Enginium
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  Coordinated the technical team and published <strong>2 technical articles</strong> in the university's annual magazine.
                </p>
              </div>
            </div>

            {/* Event Anchor & Extra-Curricular Bento */}
            <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 shadow-sm flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-600 text-white shadow-md shadow-amber-500/20">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Campus Anchor & Extra-Curricular
                </span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">
                  Event Anchor & Drama Society
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  Hosted the Alumni Meet and Farewell Ceremony at Mody University. Former member of the <strong>BIS Drama Society</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
