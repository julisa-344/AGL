import { useState, useEffect, useRef } from 'react';

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "Gran Teatro Nacional",
      image: "/assets/TeatroNacional.jpg",
      description: "Sistema eléctrico completo",
    },
    {
      name: "Parque de la Amistad Surco",
      image: "/assets/parqueMolina.jpeg",
      description: "Infraestructura de gran escala",
    },
    {
      name: "Clínica Ricardo Palma",
      image: "/assets/ricardoPalma.jpg",
      description: "Instalaciones especializadas",
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

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="obras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            Presente en las obras más importantes del país
          </h2>
          <div className="w-24 h-1 bg-agl-yellow mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`,
              }}
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-agl-black/90 via-agl-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-headings text-2xl font-bold mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-agl-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
