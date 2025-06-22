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
        }
    ];
  return (
    <section id="about" className='py-20 bg-gray-900'>
        <div className='container mx-auto px-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Section Header */}

            </div>
        </div>
      
    </section>
  )
}

export default About
