import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { 
      name: 'MongoDB', 
      icon: 'https://api.iconify.design/logos:mongodb.svg'
    },
    { 
      name: 'Express.js', 
      icon: 'https://api.iconify.design/logos:express.svg'
    },
    { 
      name: 'React.js', 
      icon: 'https://api.iconify.design/logos:react.svg'
    },
    { 
      name: 'Node.js', 
      icon: 'https://api.iconify.design/logos:nodejs.svg'
    },
    { 
      name: 'HTML5', 
      icon: 'https://api.iconify.design/logos:html-5.svg'
    },
    { 
      name: 'CSS3', 
      icon: 'https://api.iconify.design/logos:css-3.svg'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://api.iconify.design/logos:javascript.svg'
    },
    { 
      name: 'TypeScript', 
      icon: 'https://api.iconify.design/logos:typescript-icon.svg'
    },
    { 
      name: 'Next.js', 
      icon: 'https://api.iconify.design/logos:nextjs-icon.svg'
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://api.iconify.design/logos:postgresql.svg'
    },
    { 
      name: 'Redux', 
      icon: 'https://api.iconify.design/logos:redux.svg'
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg'
    },
    { 
      name: 'Bootstrap', 
      icon: 'https://api.iconify.design/logos:bootstrap.svg'
    },
    { 
      name: 'Socket.io', 
      icon: 'https://api.iconify.design/logos:socket-io.svg'
    },
    { 
      name: 'AWS', 
      icon: 'https://api.iconify.design/logos:aws.svg'
    },
    { 
      name: 'Vercel', 
      icon: 'https://api.iconify.design/logos:vercel-icon.svg'
    },
    { 
      name: 'Render', 
      icon: 'https://api.iconify.design/simple-icons:render.svg'
    },
    { 
      name: 'Cloudinary', 
      icon: 'https://api.iconify.design/logos:cloudinary.svg'
    },
    { 
      name: 'Figma', 
      icon: 'https://api.iconify.design/logos:figma.svg'
    },
    { 
      name: 'Git', 
      icon: 'https://api.iconify.design/logos:git-icon.svg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div id="skills" className="w-full px-4 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title and description */}
        <motion.h4 variants={itemVariants} className="text-center mb-2 text-lg font-Ovo text-primary">
          What I Know
        </motion.h4>
        
        <motion.h2 variants={itemVariants} className="text-center text-4xl sm:text-5xl font-Ovo mb-6 text-foreground">
          My Skills
        </motion.h2>
        <motion.p 
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I specialize in modern web technologies, with expertise in the MERN stack
        and various supporting tools and frameworks.
      </motion.p>

        {/* Skills grid */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center p-6 rounded-xl
                border border-border hover:border-primary transition-all duration-300
                hover:bg-accent relative dark:bg-muted/50"
            >
              <div className="relative z-10">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-12 h-12 mb-3 transition-transform group-hover:scale-110
                    dark:brightness-110 dark:contrast-110"
                />
                <p className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills