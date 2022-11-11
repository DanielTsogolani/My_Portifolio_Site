import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Daniel.<br/>
            <br className="hidden lg:inline-block" />A Software Engineer and Data Analyst Based in Malawi.
          </h1>
          <p className="mb-10 leading-relaxed">
           I enjoy designing and programming web applications that exceed expectations
           . I have developed a strong passion for the software development industry over
           the years and love what I do. As a Data Analyst, I enjoy uncovering insights from 
           Data and tell my data story to the world. I'm always looking to improve my skill set
           to become an engineer that colleagues can rely on, either as an individual or as a 
           team member and significantly provide value to an organisation.
           </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./daniel.jpg"
          />
        </div>
      </div>
    </section>
  );
}
