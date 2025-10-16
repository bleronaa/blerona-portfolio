import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects=[
        {
            title:'UniEvents Main',
            description:'Platform for use at the university for events that take place at the faculty, where they can register and participate',
            image:'https://uni-event.vercel.app/uploads/event4.jpg',
            technologies:['React', 'Next.js','MongoDB','Tailwind Css'],
            github:'https://github.com/bleronaa/UniEvent',
            demo:'https://uni-event.vercel.app/',
            featured:true
        },
         {
            title:'Cge Energy',
            description:'Landing page abou Cge Energy company',
            image:"/src/assets/cge.png",
            technologies:['React', 'Next.js','Tailwind Css'],
            github:'https://github.com/bleronaa/UniEvent',
            demo:'https://cgenergy.net//',
            featured:true
        }
    ];
      const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  return (
    <section id="projects" className='py-20 bg-gray-900'>
        <div className='container mx-auto px-6'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                        Featured Projects
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8'></div>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                        A showcase of my recent work and passion projects
                    </p>
                </div>
            {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium border border-indigo-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group/link"
                    >
                      <Github size={20} className="group-hover/link:scale-110 transition-transform duration-200" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform duration-200" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          {/* <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* View More Projects CTA */}
          {/* <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Projects
