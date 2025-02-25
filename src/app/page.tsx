import { Suspense } from "react";
import Bio from "./components/bio";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Education from "./components/education";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 space-y-40">
      {/* Bio Section */}
      <section id="bio" className="min-h-screen flex items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Bio />
        </Suspense>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <h2 className="text-4xl font-light mb-12 opacity-90">Projects</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen">
        <h2 className="text-4xl font-light mb-12 opacity-90">Experience</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen">
        <h2 className="text-4xl font-light mb-12 opacity-90">Education</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Education />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8">
        <p>© {new Date().getFullYear()} Steven Li • Designed & Built with ♥</p>
      </footer>
    </div>
  );
}
