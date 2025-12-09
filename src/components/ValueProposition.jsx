import { useState, useEffect, useRef } from 'react';

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const values = [
    {
      icon: "📦",
      title: "Stock constante",
      description: "Disponibilidad inmediata de más de 800 referencias",
    },
    {
      icon: "🚀",
      title: "Despacho rápido",
      description: "Entregas en 24-48 horas dentro de Lima",
    },
    {
      icon: "👷",
      title: "Asesoría técnica",
      description: "Equipo especializado para tu proyecto",
    },
    {
      icon: "📄",
      title: "Formalidad y facturación",
      description: "Documentación completa y garantías",
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
    <section ref={sectionRef} className="py-20 bg-white" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            ¿Por qué elegir AGL?
          </h2>
          <div className="w-24 h-1 bg-agl-yellow mx-auto mb-6"></div>
          <p className="text-lg text-agl-gray max-w-2xl mx-auto">
            Nos especializamos en proveer soluciones integrales para
            constructoras y profesionales del sector
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-lg hover:bg-agl-gray-light transition-all duration-700 group transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="font-headings text-xl font-bold text-agl-blue mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-agl-gray">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
