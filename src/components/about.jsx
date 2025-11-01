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
              I'm a Frontend Developer and Data Analyst passionate about creating engaging, efficient, and data-informed digital experiences. I specialize in building mobile applications with React Native and web applications with React, focusing on clean design, smooth performance, and intuitive user interfaces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              While frontend is my core strength, I also work with Python and Django REST Framework to build and integrate supportive backends that power dynamic and scalable applications. My experience in data analysis — using tools like Python, SQL, and Excel — allows me to bring an analytical perspective to development, turning data into insights that drive smarter design and functionality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m constantly exploring new technologies, UI/UX trends, and project management principles to strengthen my ability to lead and deliver successful projects from concept to deployment. When I’m not coding or analyzing data, I enjoy contributing to open-source projects and sharing knowledge with the developer community.
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