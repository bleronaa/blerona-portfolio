import React from 'react'
import {Code, Palette, Zap, Heart} from 'lucide-react';

const About = () => {
    const features=[
        {
         icon:Code,
         title: 'Clean Code',
         description:'Writing maintainable, scalable, and efficient code following best practices.'
        },
        {
        icon:Palette,
        title:'UI/UX Design',
        description:'Creating beautiful and intuitive user interfaces with attention to detail.'
        },
        {
        icon: Zap,
        title:'Performance',
        description:'Dedicated to continuous learning and staying current with technology.'
        },
         {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to continuous learning and staying current with technology.'
    }
    ];
  return (
    <section id="about" className='py-20 bg-gray-900'>
        <div className='container mx-auto px-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                        About Me
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 to-purple-500 mx-auto mb-8'>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* content */}
                    <div className='space-y-6'>
                        <div className='prose prose-lg text-gray-300'>
                            <p className='text-xl leading-relaxed mb-6'>
                             I'm a passionate Front-End Developer with a love for creating digital experiences 
                  that matter. With expertise in modern web technologies, I bring ideas to life 
                  through clean, efficient code and thoughtful design.      
                            </p>
                            <p className='text-lg leading-relaxed mb-6'>
                              My journey in web development started with curiosity and has evolved into a 
                  professional pursuit of excellence. I specialize in React, Node.js, and modern 
                  web frameworks, always staying current with the latest industry trends.
                            </p>
                            <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, or mentoring aspiring developers in the community.
                </p>
                        </div>
                         <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Node.js', 'NextJs', 'MySQL', 'ReactNative'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-indigo-400 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
           </div>
          {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className={`group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 ${
                    index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
