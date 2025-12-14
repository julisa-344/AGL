import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "Parque Kennedy - Villa",
      category: "Infrastructure",
      image: "/assets/parqueMolina.jpeg",
      description: "Fuentes de agua en el cual labore presente la marca Wavin rígida y flexible toda la serie de drenaje.",
      badge: "FEATURED",
      isFeatured: true
    },
    {
      name: "Clínica Ricardo Palma",
      category: "Health",
      image: "/assets/ricardoPalma.jpg",
      description: "Fuentes de agua en el cual labore presente la marca Wavin rígida y flexible toda la serie de drenaje.",
      badge: "COMPLETED"
    },
    {
      name: "Gran Teatro Nacional",
      category: "Culture",
      image: "/assets/TeatroNacional.jpg",
      description: "Sistema eléctrico completo para infraestructura de gran escala con instalaciones especializadas.",
      badge: "HIGHLIGHT"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProject = projects[currentIndex];
  const secondaryProjects = projects.filter((_, idx) => idx !== currentIndex).slice(0, 2);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-agl-blue via-agl-blue to-[#003d82]" id="obras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Tagline and Navigation */}
        <div className={`mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          {/* Tagline */}
          <p className="text-agl-yellow text-sm uppercase tracking-widest mb-3 font-semibold">
            Obras importantes del país
          </p>
          
          {/* Title and Navigation in same row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase">
                Proyectos
              </h2>
              <span className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-agl-yellow uppercase">
                Destacados
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full bg-white hover:bg-agl-yellow text-agl-blue flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full bg-agl-yellow hover:bg-white text-agl-blue flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Layout - Horizontal Scroll Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[featuredProject, ...secondaryProjects].map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta de proyecto
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white h-full shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Image Section */}
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1.5 bg-agl-yellow text-agl-blue text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content Section - Below Image */}
      <div className="p-6">
        {/* Category */}
        <p className="text-agl-gray text-xs uppercase tracking-widest mb-2">
          {project.category}
        </p>
        
        {/* Title */}
        <h3 className="font-headings text-xl font-bold text-agl-blue mb-3 group-hover:text-agl-yellow transition-colors duration-300">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-agl-gray text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-agl-yellow to-agl-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default FeaturedProjects;
