import React from "react";


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Priya Varshney.
            <br className="hidden lg:inline-block" />I have knowledge in HTML, CSS, JavaScript, React, Java and I love to build amazing user-friendly
            web sites.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am from Bahjoi, Uttar Pradesh.
          Passionate Full Stack Web Developer with skills in the MERN stack, I have learned Full Stack Web Development in Masai School. Skilled in problem- solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth by becoming more knowledgeable and skilled person.
            
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Download CV
            
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
               My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-80 "
            alt="hero"
            src="./profileWhite.jpg"
          />
        </div>
      </div>
    </section>
  );
}
