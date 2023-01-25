
import React from "react";
import { projects } from "../data";
import {HiCode} from 'react-icons/hi'

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCode className="w-10 mb-4 h-10 mx-auto inline-block text-color-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Website clones I've Built
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4" target="_blank">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                  <h4 className="leading-relaxed text-sm title-font font-medium text-blue-800 mb-1">{project.addOns}</h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
