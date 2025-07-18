import { GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                As a Computer Science Engineering student, I've embarked on an exciting journey of discovery and innovation. 
                My passion for technology drives me to explore new frontiers in software development and artificial intelligence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I believe in the power of code to solve real-world problems and create meaningful impact. 
                Every project I undertake is an opportunity to learn, grow, and contribute to the ever-evolving tech landscape.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full text-sm">Tech Enthusiast</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 rounded-full text-sm">Quick Learner</span>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              {/* Professional image placeholder */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center text-white">
                  <div className="text-center">
                    <GraduationCap className="h-16 w-16 mb-4 mx-auto" />
                    <p className="text-xl font-semibold">Professional Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Code className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
