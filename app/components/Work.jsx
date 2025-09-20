import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700">
        My Portfolio
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-6">
        My Latest Work
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
        As a MERN stack developer, I've built various projects ranging from e-commerce 
        platforms to social media applications. Each project demonstrates my expertise 
        in creating responsive, user-friendly interfaces with modern features and 
        clean designs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-10">
        {workData.map((project, index) => (
          <div
            className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            {/* Project Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform 
              transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.bgImage})` }}
              onClick={()=>project.link}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Project Info Card */}
            <div 
              className="absolute left-3 right-3 bottom-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 
              transform transition-all duration-500 translate-y-2 opacity-0 
              group-hover:translate-y-0 group-hover:opacity-100 shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-gray-800 truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-shrink-0"
                >
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black flex items-center 
                    justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 
                    transition-all duration-300 hover:scale-110"
                  >
                    <Image 
                      src={assets.send_icon} 
                      alt="Visit project" 
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
