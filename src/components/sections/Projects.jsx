export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Travel Agency</h3>
            <p className="text-gray-400 mb-4">
              Built <strong>tour.af</strong> from scratch for a travel agency, focusing on a clean, responsive design and smooth user experience. I handled the entire development process—from planning and UI/UX design to front-end and back-end implementation—ensuring the platform is fast, reliable, and easy for users to explore and book tours across Afghanistan.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React.js","TailwindCSS", "Node.js", "Express.js" ].map(
                (skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-start items-center">
              <a
                href="https://tour.af/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-2"
              >
                View Project
              </a>
            </div>
          </div>
           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Job Portal</h3>
            <p className="text-gray-400 mb-4">
             Built <strong>talents.af</strong> as a user-friendly, responsive job platform for Afghan professionals. Managed the full development process to deliver a fast, secure site connecting users with remote and visa-sponsored jobs.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["UI/UX", "MERN", "TailwindCSS", "React.js", "Node.js", "Express.js", "MySQL"].map(
                (skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-start items-center">
              <a
                href="https://talents.af/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-2"
              >
                View Project
              </a>
            </div>
          </div>
           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Ecommerce Platform</h3>
            <p className="text-gray-400 mb-4">
              Built <strong>abdashoes.com/</strong> as a comprehensive eCommerce platform specializing in footwear, focusing on a clean, responsive design and seamless user experience. I managed the full development process, delivering a fast, secure site that enables customers to easily browse, filter, and purchase shoes with confidence.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React.js", "Node.js", "HTML", "CSS", "JavaScript"].map(
                (skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-start items-center">
              <a
                href="https://abdashoes.com"
                className="text-blue-400 hover:text-blue-300 transition-colors my-2"
              >
                View Project
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
