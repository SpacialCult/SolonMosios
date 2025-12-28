import { motion } from "framer-motion";

export default function Home({ setPage }: { setPage: (page: string) => void }) {
  document.title = "Home | Solon Mosios";
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-400">Solon Mosios</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A passionate developer who loves building web apps, crafting stories through games,
          and exploring the art of clean, expressive code.
        </p>

        <button
          onClick={() => setPage("Projects")}
          className="mt-8 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition"
        >
          View My Work
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-4xl w-full"
      >
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="font-semibold text-blue-400 text-xl mb-2">Web Development</h3>
          <p className="text-gray-300 text-sm">
            React, Tailwind CSS, JavaScript, and responsive design.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="font-semibold text-blue-400 text-xl mb-2">Game Development</h3>
          <p className="text-gray-300 text-sm">
            Unity (C#), RPG Maker MV — blending storytelling with interactive design.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="font-semibold text-blue-400 text-xl mb-2">Software & Logic</h3>
          <p className="text-gray-300 text-sm">
            C, C++, Ruby — small tools, problem solving, and backend exploration.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
