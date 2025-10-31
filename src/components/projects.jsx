import { Code2, Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website with shopping cart, product filters, and checkout functionality.',
      tech: ['React', 'Tailwind CSS', 'Redux', 'REST API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search, 5-day forecast, and beautiful UI.',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Productivity app with drag-and-drop functionality, task categories, and local storage.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'DnD Kit'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <Code2 className="h-20 w-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};