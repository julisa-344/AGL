import { useState, useEffect, useRef } from 'react';

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const values = [
    {
      title: "Stock constante",
      description: "Disponibilidad inmediata",
      percentage: 95,
      color: "#0066CC", // agl-blue
    },
    {
      title: "Entregas rápidas",
      description: "24-48 horas en Lima",
      percentage: 98,
      color: "#FFB800", // agl-yellow
    },
    {
      title: "Satisfacción",
      description: "Clientes satisfechos",
      percentage: 92,
      color: "#0066CC",
    },
    {
      title: "Formalidad",
      description: "Documentación completa",
      percentage: 100,
      color: "#FFB800",
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
          <p className="text-agl-yellow font-semibold uppercase tracking-wider text-sm mb-2">
            Cómo Funciona
          </p>
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            ¿Por qué elegir AGL?
          </h2>
          <p className="text-lg text-agl-gray max-w-2xl mx-auto">
            Nos especializamos en proveer soluciones integrales para
            constructoras y profesionales del sector
          </p>
        </div>

        {/* Values Grid with Donut Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <DonutCard
              key={index}
              value={value}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta con gráfico de dona
const DonutCard = ({ value, index, isVisible }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000; // 2 segundos
    const targetPercentage = value.percentage;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCurrentPercentage(Math.floor(easeOutQuart * targetPercentage));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [isVisible, value.percentage, index]);

  // Calcular el stroke-dashoffset para la animación de la dona
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentPercentage / 100) * circumference;

  return (
    <div
      className={`text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Donut Chart SVG */}
      <div className="relative w-44 h-44 mx-auto mb-6">
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx="88"
            cy="88"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="6"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="88"
            cy="88"
            r={radius}
            stroke={value.color}
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center content - Solo el porcentaje */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-agl-blue tabular-nums">
            {currentPercentage}
            <span className="text-2xl text-agl-yellow">%</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-headings text-xl font-bold text-agl-blue mb-2">
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-agl-gray">
        {value.description}
      </p>
    </div>
  );
};

export default ValueProposition;
