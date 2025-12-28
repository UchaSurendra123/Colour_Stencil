import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-5xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/#portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-body"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-primary uppercase tracking-[0.3em] mb-4">
                {project.category}
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                {project.title}
              </h1>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-body text-muted-foreground uppercase tracking-wider text-sm mb-2">
                    Client
                  </p>
                  <p className="font-display text-2xl text-foreground">{project.client}</p>
                </div>
                <div>
                  <p className="font-body text-muted-foreground uppercase tracking-wider text-sm mb-2">
                    Year
                  </p>
                  <p className="font-display text-2xl text-foreground">{project.year}</p>
                </div>
              </div>
              
              <div>
                <p className="font-body text-muted-foreground uppercase tracking-wider text-sm mb-3">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-background border border-border rounded-full font-body text-sm text-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid gap-8">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-dark-surface">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <p className="font-body text-muted-foreground uppercase tracking-wider mb-4">
            Next Project
          </p>
          {(() => {
            const currentIndex = projects.findIndex((p) => p.id === id);
            const nextProject = projects[(currentIndex + 1) % projects.length];
            return (
              <Link
                to={`/project/${nextProject.id}`}
                className="font-display text-4xl md:text-6xl text-foreground hover:text-primary transition-colors"
              >
                {nextProject.title}
              </Link>
            );
          })()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;