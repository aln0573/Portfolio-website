import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16 bg-background">
        <div className="mb-8">
            <Image 
              src={assets.profile_img} 
              alt='Profile' 
              className='rounded-full w-32 h-32 object-cover border-4 border-background shadow-lg'
            />
        </div>
        <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-4 font-Ovo text-foreground'>
          Hi! I am Alan Thomas
          <Image src={assets.hand_icon} className='w-6 h-6 animate-wave'/>
        </h3>
        <h1 className='text-3xl sm:text-5xl lg:text-[66px] font-Ovo leading-tight mb-6 text-foreground'>
          MERN Stack developer
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo text-muted-foreground mb-8 leading-relaxed'>
          "Motivated junior developer with a strong foundation in MERN stack development. 
          Proven ability to deliver user-centric applications, collaborate with teams, 
          and adapt quickly to new technologies and frameworks."
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
            <a 
              href="#contact" 
              className='px-10 py-3 border border-primary rounded-full bg-primary text-primary-foreground 
                flex items-center gap-2 hover:bg-primary/90 transition-colors duration-300'
            >
              Contact me 
              <Image src={assets.right_arrow_white} className='w-4 h-4'/>
            </a> 
            <a 
              href="/alan-resume.pdf" 
              download 
              className='px-10 py-3 border rounded-full border-border 
                flex items-center gap-2 hover:bg-accent transition-colors duration-300
                text-foreground'
            >
              My resume 
              <Image src={assets.download_icon} alt='Download Resume' className='w-4 h-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header