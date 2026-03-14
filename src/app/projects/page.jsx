"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Dashboard App",
    image: "/dashboard.png",
    description: "React və Next.js ilə hazırlanmış admin panel dashboard.",
    live: "https://dashboard-page-steel.vercel.app",
    github: "https://github.com/Pasha-Ibrahim/dashboard.git",
  },
  {
    title: "Portfolio Site",
    image: "/portfolio.png",
    description: "Mənim şəxsi portfolio saytım.",
    live: "",
    github: "",
  },
  {
    title: "Blog App",
    image: "/blog.png",
    description: "Fullstack blog tətbiqi Next.js + Node.js ilə.",
    live: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col"
            >
              <a href={project.live} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover cursor-pointer"
                />
              </a>

              <div className="p-4 flex flex-col grow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4 grow">{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition w-fit"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
