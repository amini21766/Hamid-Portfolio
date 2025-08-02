import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const FrontedSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "UI/UX",
    "React.js",
    "TailwindCSS",
    "Bootstrap",
  ];

  const BackendSkills = ["Node.js", "Express.js",   "API", "Restful APIs" ,'API Integration', "MongoDB", "MySQL"];

  const ToolsAndTechnologies = ["Git", "GitHub", "AWS", "SEO", "Postman", "Agile", "Project Management"]

  const VersionControl = ["Git", "GitHub"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10  hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m <strong>Hamid Ahmad Amini</strong>, a passionate and detail-oriented Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). With a strong foundation in both front-end and back-end technologies, I create responsive, scalable, and user-friendly web applications tailored to meet real-world needs. Whether it's building clean UIs, integrating APIs, or optimizing performance, I focus on writing maintainable code and delivering reliable solutions. I'm committed to continuous learning and helping clients bring their ideas to life through efficient and elegant development.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl mb-3 font-bold">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {FrontedSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl mb-3 font-bold">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {BackendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl mb-3 font-bold">Tools and Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {ToolsAndTechnologies.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10  border hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">📚 Education</h3>
              <ul className="list-disc text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> -Kabul University
                  (2020 - 2024)
                </li>
                <li>
                  <strong>Relevant Courses: </strong>Software Engineering, Web Development, Data Structure, Cloud
                  Computing
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10  border hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <ul className="list-disc  text-gray-300 space-y-2">
                <li>
                  <strong>Idevelop Group (2022 - 2024)</strong> worked as
                  Full-stack software engineer at idevelopgroup.org .
                </li>
                <li>
                  <strong>Qamar Charity Foundation (2024- 2025)</strong> I
                  developed the Qarmar foundation official website and them
                  Agency management System.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
