import { motion } from "framer-motion";

const skillGroups = {
  "Languages": ["HTML5", "CSS3", "JavaScript", "C", "C++", "C#", "Java", "Ruby", "PHP"],
  "Frameworks & Tools": ["React", "Next.js", "Wordpress CMS", "Oracle MySQL", "Unity", "Unreal Engine 5", "RPG Maker MV"],
  "Other": ["Video Editing"]
};

const hobbies = [
  { title: "Aikido", desc: "Practicing since 2018, 1st Kyu", emoji: "🥋" },
  { title: "Reading", desc: "Sci-fi & mystery books", emoji: "📚" },
  { title: "Gaming", desc: "JRPGs & open-world games", emoji: "🎮" },
  { title: "Video Projects", desc: "Creating short videos for friends", emoji: "🎬" },
  { title: "RPG Maker", desc: "Developing a personal game project", emoji: "🕹️" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a developer passionate about blending logic, design, and storytelling.  
          I enjoy experimenting with new technologies and learning through hands-on projects.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Professional Column */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-semibold text-blue-400 mb-6">Professional</h3>

          <div className="space-y-6 mb-10">
            {[
              { school: "ΙΕΚ ΑΚΜΗ", degree: "IT Applications Technician", period: "2021 – 2023" },
              { school: "IEK DELTA 360", degree: "Business Administration Executive", period: "2019 – 2021" }
            ].map((edu, index) => (
              <motion.div
                key={edu.school}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 rounded-2xl p-5 border-l-4 border-blue-500 cursor-pointer"
              >
                <h4 className="text-xl font-semibold text-white">{edu.school}</h4>
                <p className="text-gray-400 text-sm">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 mb-10">
            {[
              { company: "GRDiscovery", role: "IT Applications Technician", period: "Sep 2024 – Mar 2025", desc: "Practical experience in web apps, database management, and IT support." },
              { company: "Καπέτας Κατασκευαστική", role: "Business Administration Executive", period: "Oct 2022 – Apr 2023", desc: "Assisted in administrative management, documentation, and project coordination." }
            ].map((intern, index) => (
              <motion.div
                key={intern.company}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 rounded-2xl p-5 border-l-4 border-green-500 cursor-pointer"
              >
                <h4 className="text-xl font-semibold text-white">{intern.company}</h4>
                <p className="text-gray-400 text-sm">{intern.role}</p>
                <p className="text-gray-500 text-sm">{intern.period}</p>
                <p className="text-gray-400 text-sm mt-2">{intern.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(skillGroups).map(([group, groupSkills], i) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800 p-4 rounded-2xl shadow-md"
                >
                  <h5 className="text-white font-semibold mb-2">{group}</h5>
                  <div className="flex flex-wrap gap-2">
                    {groupSkills.map(skill => (
                      <span key={skill} className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-3 py-1 rounded-full text-sm hover:from-blue-600 hover:to-blue-400 cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Personal Column */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-semibold text-purple-400 mb-6">Personal</h3>
          <div className="grid gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-5 flex items-center gap-4 cursor-pointer"
              >
                <div className="text-2xl">{hobby.emoji}</div>
                <div>
                  <h4 className="text-white font-semibold">{hobby.title}</h4>
                  <p className="text-gray-400 text-sm">{hobby.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
