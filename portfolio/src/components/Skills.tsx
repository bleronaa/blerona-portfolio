import React from 'react'

const Skills = () => {
    const skillCategories = [
        {
            title:'Frontend',
            skills:[
                {name: 'React', level:90},
                {name: 'TypeScript', level:85},
                {name:'Tailwind Css', level:85},
                {name:'Next.js', level:80},
                {name: 'ReactNative', level:75}
            ]
        },
        {
            title:'Backend',
            skills:[
                {name:'Node.js', level:85},
                {name:'Next.js', level:85},
                {name:'MongoDb', level:90},
                {name:'MySQL', level:85},
                {name:'TypeScript', level:80}
            ]
        },
        {
            title:'Tools & Others',
            skills:[
                {name: 'Git',level:95},
                {name: 'Figma', level:90},
                {name:'Canva', level:85},
                {name:'Vsc', level:90},
                {name:'Postman', level:85}

            ]
        }
    ]
  return (
    <section id="skills" className="py-20 bg-gray-800">
        <div className='container mx-auto px-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Section Header */}
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent '>
                    Skills & Expertise
                </h2>
                <div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8'></div>
                <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                         A comprehensive overview of my technical skills and proficiency levels
                </p>
            </div>
            {/* skills Grid */}
           <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-indigo-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. 
                Currently exploring AI/ML integration, advanced React patterns, and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
