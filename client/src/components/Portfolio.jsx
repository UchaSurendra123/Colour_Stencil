import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] mb-4">Our Work Speaks for Itself</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">PORTFOLIO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${project.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-body text-primary text-sm uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-3xl text-foreground">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;