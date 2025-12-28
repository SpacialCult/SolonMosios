import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  category: "Web" | "Games" | "Other" | "Wordpress";
  image: string;
  description: string;
  link?: string;
  coDev?: string;
  notes?: string;
};

const projects: Project[] = [
  {
    title: "Personal Website",
    category: "Web",
    image: `${import.meta.env.BASE_URL}images/wb.png`,
    description: "A responsive personal portfolio built with React and Tailwind CSS.\n You're viewing this right now!",
    link: "https://spacialcult.github.io/SolonMosios/",
  },
  {
    title: "Rifts: A World Apart",
    category: "Games",
    image: `${import.meta.env.BASE_URL}images/Newrifts.png`,
    description: "A 2D turn-based RPG made in RPG Maker MV.",
    link: "https://hakairyu.itch.io/rifts-a-world-apart",
  },
  {
    title: "Mastro Adventures",
    category: "Games",
    image: `${import.meta.env.BASE_URL}images/mastroadventures.png`,
    description: "A 2D turn-based RPG made with Unity and C#.",
    link: "https://hakairyu.itch.io/mastro-adventures"
  },
  {
    title: "Rock Paper Scissors (C)",
    category: "Other",
    image: `${import.meta.env.BASE_URL}images/rockgame.png`,
    description: "A simple command-line rock-paper-scissors game written in C.",
  },
  {
    title: "RPG Enemy Guide (C++)",
    category: "Other",
    image: `${import.meta.env.BASE_URL}images/enemyindex.png`,
    description: "A terminal-based guide tool for enemy data in an RPG project.",
  },
  {
    title: "Authenticator (Ruby)",
    category: "Other",
    image: `${import.meta.env.BASE_URL}images/ruby.png`,
    description: "A simple terminal-based app that validates user credentials and displays stored profile information.",
  },
  {
    title: "FitTracker",
    category: "Web",
    image: `${import.meta.env.BASE_URL}images/fitrack.png`,
    description: "A small interactive app built with React and modern hooks.",
    link: "https://moswebgr.github.io/FitTracker/",
    coDev: "https://mosweb.gr/VasilisMoskofidis",
  },
  {
    title: "Calendar",
    category: "Web",
    image: `${import.meta.env.BASE_URL}images/calendar.png`,
    description: "A Calendar web application built with JavaScript during my internship.",
    link: "https://calendar.mosweb.gr/",
    coDev: "https://mosweb.gr/VasilisMoskofidis",
  },
  {
    title: "OrderUp",
    category: "Web",
    image: `${import.meta.env.BASE_URL}images/IASON.png`,
    description: "A web application that can be used to track orders, using React for the frontend and node.js+JSON files for the backend.",
  },
    {
    title: "GRD BOX",
    category: "Wordpress",
    image: `${import.meta.env.BASE_URL}images/box.png`,
    description: "GRDiscovery's subscription service which provides access to the company's tv productions.",
    link: "https://box.grdiscovery.com/",
  },
    {
    title: "kofsanidis.pro",
    category: "Wordpress",
    image: `${import.meta.env.BASE_URL}images/kofsanidi.jpg`,
    description: "A website designed to showcase the client's work regarding tv productions. \b The website has been currently taken down by the owner.",
    notes: "Website taken down by owner",
  },
];

const categories = ["All", "Web", "Games", "Other", "Wordpress"] as const;

export default function Projects() {
  document.title = "Projects | Solon Mosios";
  const [filter, setFilter] = useState<"All" | "Web" | "Games" | "Other" |"Wordpress">("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="p-8 text-center bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-white">My Projects</h1>

      {}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition 
              ${
                filter === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        <AnimatePresence>
        {filteredProjects.map((project) => (
        <motion.div
        key={project.title}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition w-80 sm:w-96"
      >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 w-full h-56 sm:h-64 object-contain mx-auto"
      />
      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
      <p className="text-gray-400 text-base mt-2">{project.description}</p>

      {project.coDev && (
        <a
          href={project.coDev}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-sm mt-2 block italic hover:text-yellow-300"
        >
          Co-Dev →
        </a>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 mt-3 inline-block text-sm"
        >
          View →
        </a>
      )}
    </motion.div>
  ))}
    </AnimatePresence>
      </motion.div>
    </div>
  );
}