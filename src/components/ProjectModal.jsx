import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageViewer } from "./ImageViewer";

export const ProjectModal = ({ project, isOpen, onClose, onNext, onPrev }) => {
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const openImageViewer = (imageIndex, images) => {
    setAllImages(images);
    setCurrentImageIndex(imageIndex);
    setImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setImageViewerOpen(false);
  };

  const handleImageNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handleImagePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors duration-200" aria-label="Close">
          <X size={24} />
        </button>

        {/* Navigation Buttons */}
        {onPrev && (
          <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors duration-200" aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
        )}

        {onNext && (
          <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors duration-200" aria-label="Next">
            <ChevronRight size={24} />
          </button>
        )}

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Project Image */}
          <div className="w-full h-[400px] bg-muted overflow-hidden cursor-pointer group relative" onClick={() => openImageViewer(0, [project.image, ...(project.screenshots || [])])}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">Click to view fullscreen</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{project.description}</p>

            {/* Additional Screenshots Section (optional) */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Screenshots</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border cursor-pointer group relative" onClick={() => openImageViewer(index + 1, [project.image, ...project.screenshots])}>
                      <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-58 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to enlarge</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex gap-4 pt-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200">
                    <ExternalLink size={20} />
                    <span>View Demo</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-accent transition-colors duration-200">
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Image Viewer */}
        <ImageViewer images={allImages} currentIndex={currentImageIndex} isOpen={imageViewerOpen} onClose={closeImageViewer} onNext={handleImageNext} onPrev={handleImagePrev} />
      </div>
    </div>
  );
};
