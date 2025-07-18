import { Coffee, Brain } from "lucide-react";
import { SiPython } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <Coffee className="h-8 w-8 text-red-600 dark:text-red-400" />,
      description: "Object-oriented programming, data structures, and enterprise application development.",
      proficiency: 85,
      color: "red"
    },
    {
      name: "Python",
      icon: <SiPython className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      description: "Data science, machine learning, web development, and automation scripting.",
      proficiency: 90,
      color: "yellow"
    },
    {
      name: "Artificial Intelligence",
      icon: <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      description: "Machine learning algorithms, neural networks, and intelligent system design.",
      proficiency: 75,
      color: "purple"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and programming languages I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 bg-${skill.color}-100 dark:bg-${skill.color}-900 rounded-full flex items-center justify-center`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {skill.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-${skill.color}-600 h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}% Proficiency</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
