import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Aditi Durgapal</h3>
            <p className="text-gray-400">Building tomorrow's technology today</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/aditi-durgapal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/aditidurgapal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://twitter.com/aditidurgapal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Twitter className="h-8 w-8" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2024 Aditi Durgapal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
