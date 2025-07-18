import { Linkedin, Github, Twitter } from "lucide-react";

export default function Social() {
  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Professional Network",
      icon: <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      url: "https://www.linkedin.com/in/aditi-durgapal",
      bgColor: "bg-blue-100 dark:bg-blue-900"
    },
    {
      name: "GitHub",
      description: "Code Repository",
      icon: <Github className="h-8 w-8 text-gray-900 dark:text-gray-100" />,
      url: "https://github.com/aditidurgapal",
      bgColor: "bg-gray-100 dark:bg-gray-700"
    },
    {
      name: "Twitter",
      description: "Tech Updates",
      icon: <Twitter className="h-8 w-8 text-sky-600 dark:text-sky-400" />,
      url: "https://twitter.com/aditidurgapal",
      bgColor: "bg-sky-100 dark:bg-sky-900"
    }
  ];

  return (
    <section id="socials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's connect and stay in touch! Find me on these platforms.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 min-w-60 animate-on-scroll"
            >
              <div className={`w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {social.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{social.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{social.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
