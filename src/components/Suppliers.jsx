import { useState, useEffect, useRef } from 'react';

const Suppliers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const suppliers = [
    { name: "Tuboplast", logo: "/assets/tuboplast.jpg" },
    { name: "Kinplast", logo: "/assets/kinplast.png" },
    { name: "Matusita", logo: "/assets/matusita.png" },
    { name: "Pavco", logo: "/assets/pavco.png" },
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white" id="proveedores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          {/* Palabrita */}
          <p className="text-agl-yellow font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros Aliados
          </p>
          
          {/* Título */}
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            Proveedores certificados
          </h2>
          
          {/* Descripción */}
          <p className="text-base text-agl-gray max-w-3xl mx-auto">
            Trabajamos con los mejores fabricantes para garantizar la calidad y
            durabilidad del PVC en cada proyecto
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className={`w-32 md:w-40 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={supplier.logo}
                alt={supplier.name}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
