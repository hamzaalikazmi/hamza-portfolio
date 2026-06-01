import React from 'react';
// Step 2a: Import your picture from the assets folder.
// Make sure the filename matches your actual file (e.g., .jpg vs .png)
import profilePicture from './assets/3.jpg'; 

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-tight">
            Hamza<span className="text-cyan-500">.dev</span>
          </div>
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education</a></li>
          </ul>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        
        {/* Step 2b: Updated Hero / About Section */}
        {/* We changed the layout to md:flex-row to have two columns on medium screens */}
        <section id="about" className="py-32 md:py-48 flex flex-col-reverse md:flex-row justify-center items-center min-h-[80vh] gap-12">
          
          {/* Text Column */}
          {/* We added items-center md:items-start and text-center md:text-left to handle centering on mobile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20 w-fit">
              Available for Summer Internships
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Hamza Ali.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              I'm an Information Technology student specializing in modern web and mobile applications. Currently seeking a summer internship in software development to build impactful products.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]">
                View Projects
              </a>
              <a href="mailto:your.email@example.com" className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-lg border border-slate-700 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* Picture Column */}
          {/* This styles the picture into a circle with a border and subtle shadow */}
          <div className="flex-none justify-center items-center">
            <img 
              src={profilePicture} 
              alt="Hamza Ali" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-slate-800 shadow-2xl shadow-slate-900"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-800/50">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="text-cyan-500">01.</span> Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-white font-semibold mb-4 text-lg">Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'Flutter', 'Firebase', 'Python'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md">{tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-white font-semibold mb-4 text-lg">Networking</h3>
              <div className="flex flex-wrap gap-2">
                {['RIPv2', 'DHCP Configurations', 'Cisco Topologies'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md">{tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-white font-semibold mb-4 text-lg">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {['Data Analytics', 'NLP Pipeline', 'Git', 'Agile'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-800/50">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="text-cyan-500">02.</span> Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Coffee Shop App</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                A comprehensive cross-platform mobile and web application for a coffee shop, featuring real-time data synchronization.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">Flutter</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">Firebase</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Big Data NLP Pipeline</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Developed a Python-based text preprocessing pipeline to clean and structure Movie Reviews dataset.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">Python</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">NLP</span>
              </div>
            </div>

          </div>
        </section>

        {/* Education & Growth Section */}
        <section id="education" className="py-20 border-t border-slate-800/50 mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="text-cyan-500">03.</span> Education
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
              <div>
                <h3 className="text-xl font-bold text-white">Bahria University, Islamabad</h3>
                <p className="text-slate-400 mt-1">Bachelor's Degree in Information Technology</p>
              </div>
              <div className="mt-4 md:mt-0 text-cyan-500 font-mono text-sm bg-cyan-500/10 px-4 py-2 rounded-lg">
                Currently in 6th Semester
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8 text-center text-slate-500 text-sm">
        <p>Built with React & Tailwind CSS v4</p>
        <p className="mt-2">© 2026 Hamza. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;