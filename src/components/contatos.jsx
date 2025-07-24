import React from "react";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contatos = () => {
  return (
    <>
      <footer 
        className="
        mt-12
        bottom-0
        left-0
        w-full
        bg-[rgb(13,27,42)]
        text-[rgb(224,225,221)]
        py-6
        z-10
        "
        
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
          <p className="text-sm">© Hugo Rodrigues 2025</p>

          <a
            href="tel:+5586981513446"
            className="flex items-center space-x-2 text-sm hover:text-[rgb(65,90,119)] transition-colors"
          >
            <FaPhone />
            <span>(86) 98151-3446</span>
          </a>

          <div className="flex space-x-4 text-xl">
            <a //Github
              href="https://github.com/Apenas1Hugo"                    
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[rgb(65,90,119)] transition-colors"
            >
              <FaGithub />
            </a>
            <a //Email
              href="mailto:hugorodriguesm27@gmail.com"                 
              className="hover:text-[rgb(65,90,119)] transition-colors"
            >
              <FaEnvelope />
            </a>
            <a //Linkedin
              href=" "
              target="_blank"                                            
              rel="noopener noreferrer"
              className="hover:text-[rgb(65,90,119)] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default contatos;
