import { Mail, Github, Linkedin } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'Vite', 'npm/yarn', 'Responsive Design', 'REST APIs', 'Figma', 'VS Code']
    },
    {
      title: 'Currently Learning',
      skills: ['TypeScript', 'Three.js', 'GraphQL', 'Testing (Jest/Vitest)']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
};