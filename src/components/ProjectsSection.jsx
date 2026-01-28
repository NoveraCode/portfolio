import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Landing Page RAPMAFEST #9",
    description: "A dedicated landing page built to introduce the RAPMAFEST #9 event and manage all online ticket sales in one place.",
    image: "/projects/rapmafest9.png",
    screenshots: ["/projects/rapmafest9-1.png", "/projects/rapmafest9-2.png", "/projects/rapmafest9-3.png"],
    tags: ["HTML", "Bootstrap", "CSS"],
    demoUrl: "https://landing-page-rapmafest9.vercel.app/",
  },
  {
    id: 2,
    title: "Landing Page RAPMAFEST #10",
    description: "A dedicated landing page built to introduce the RAPMAFEST #10 event and manage all online ticket sales in one place.",
    image: "/projects/rapmafest10.png",
    screenshots: ["/projects/rapmafest10-1.png", "/projects/rapmafest10-2.png", "/projects/rapmafest10-3.png"],
    tags: ["HTML", "Bootstrap", "CSS"],
    demoUrl: "https://landing-page-rapmafest10.vercel.app/",
  },
  {
    id: 3,
    title: "Jelajah Tulang",
    description: "An interactive learning app built with Next.js 16. Designed to make studying the human skeletal system engaging through learning videos, quizzes, and audio for each bone.",
    image: "/projects/jelajah-tulang.png",
    screenshots: ["/projects/jelajah-tulang-1.png", "/projects/jelajah-tulang-2.png", "/projects/jelajah-tulang-3.png"],
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "https://jelajah-tulang.vercel.app/",
    githubUrl: "https://github.com/rwynns/jelajah-tulang",
  },
  {
    id: 4,
    title: "Jelajah Sendi",
    description: "A learning website designed as an introduction to human joints. This application uses interactive puzzles and GIF animations of joint movements to create a unique and engaging learning experience.",
    image: "/projects/jelajah-sendi.png",
    screenshots: ["/projects/jelajah-sendi-1.png", "/projects/jelajah-sendi-2.png", "/projects/jelajah-sendi-3.png"],
    tags: ["React", "Chakra UI"],
    demoUrl: "https://jelajah-sendi.vercel.app/",
    githubUrl: "https://github.com/rwynns/jelajah-sendi",
  },
  {
    id: 5,
    title: "Jelajah Saraf",
    description: "A learning website that aims to introduce the human nervous system. This application uses learning videos for material delivery and interactive quizzes to test understanding.",
    image: "/projects/jelajah-saraf.png",
    screenshots: ["/projects/jelajah-saraf-1.png", "/projects/jelajah-saraf-2.png", "/projects/jelajah-saraf-3.png"],
    tags: ["React", "Chakra UI"],
    demoUrl: "https://jelajah-saraf-sandy.vercel.app/",
    githubUrl: "https://github.com/rwynns/jelajah-saraf",
  },
  {
    id: 6,
    title: "SiHaki",
    description:
      "A full-stack web application built with Laravel, specifically designed to manage a university's Intellectual Property (IP) document approval workflow. The system enables users to create, submit, review, and approve documents efficiently—reducing manual work and improving workflow transparency.",
    image: "/projects/sihaki.png",
    screenshots: ["/projects/sihaki-1.png", "/projects/sihaki-2.png", "/projects/sihaki-3.png"],
    tags: ["Laravel", "Bootstrap", "mySQL"],
    demoUrl: "",
    githubUrl: "https://github.com/Pumpkins20/siHaki",
  },
  {
    id: 7,
    title: "E-Posyandu Si Bunda",
    description:
      "A digital solution built to modernize child health monitoring by replacing the conventional Posyandu (maternal/child health) book. This web application features direct integration with an IoT digital scale, allowing for the seamless capture of toddler height and weight data to efficiently track their health conditions.",
    image: "/projects/eposyandu.png",
    screenshots: ["/projects/eposyandu-1.png", "/projects/eposyandu-2.png", "/projects/eposyandu-3.png"],
    tags: ["Laravel", "Next.js", "mySQL", "IoT"],
    // demoUrl: "https://eposyandu.edutic.id",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of our projects. Click on the project title to view more details.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer" onClick={() => openModal(project)}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Show links only if they exist */}
                {project.demoUrl || project.githubUrl ? (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground/80 hover:text-primary transition-colors duration-300" title="View Demo">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground/80 hover:text-primary transition-colors duration-300" title="View Code">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-muted-foreground/60 italic">Click to view details</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} onNext={handleNext} onPrev={handlePrev} />
      </div>
    </section>
  );
};
