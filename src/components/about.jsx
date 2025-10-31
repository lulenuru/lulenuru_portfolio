import { Mail, Github, Linkedin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate frontend developer with a love for creating elegant and efficient web applications. With expertise in React, Tailwind CSS, and modern JavaScript, I transform ideas into reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development started with a curiosity about how websites work, and it has grown into a full-fledged career. I constantly learn new technologies and best practices to stay ahead in this ever-evolving field.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▹</span>
                <span>Location: Your City, Country</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▹</span>
                <span>Experience: X years in web development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▹</span>
                <span>Education: Your Degree/Certifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">▹</span>
                <span>Interests: UI/UX Design, Open Source, Tech Blogging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};