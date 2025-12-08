const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
          alt="Construcción industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-agl-blue/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headings font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">
          Accesorios de PVC para
          <br />
          <span className="text-agl-yellow">proyectos exigentes</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Stock permanente, entrega rápida y asesoría técnica para tu obra
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#productos"
            className="w-full sm:w-auto bg-agl-yellow text-agl-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver catálogo completo
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-agl-blue transition-all duration-300"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
