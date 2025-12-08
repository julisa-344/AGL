const FeaturedProjects = () => {
  const projects = [
    {
      name: "Gran Teatro Nacional",
      image: "https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?q=80&w=2070",
      description: "Sistema eléctrico completo",
    },
    {
      name: "Nuevo Aeropuerto",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
      description: "Infraestructura de gran escala",
    },
    {
      name: "Clínica Ricardo Palma",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
      description: "Instalaciones especializadas",
    },
  ];

  return (
    <section className="py-20 bg-white" id="obras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
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
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
