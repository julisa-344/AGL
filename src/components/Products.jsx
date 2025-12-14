import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      name: "Uniones",
      image: "/assets/union.png",
      description: "Uniones de PVC de alta resistencia para conexiones seguras y duraderas en tus instalaciones eléctricas.",
      step: "STEP 1"
    },
    {
      name: "Conectores",
      image: "/assets/conector.png",
      description: "Conectores profesionales que garantizan compatibilidad total y facilidad de instalación en cualquier proyecto.",
      step: "STEP 2"
    },
    {
      name: "Curvas",
      image: "/assets/curva.png",
      description: "Curvas y codos en diferentes ángulos y diámetros para adaptarse a las necesidades específicas de tu obra.",
      step: "STEP 3"
    },
    {
      name: "Separadores",
      image: "/assets/separadorr.png",
      description: "Separadores y tees para ramificaciones profesionales que mantienen la organización de tus instalaciones.",
      step: "STEP 4"
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
    <section ref={sectionRef} className="py-20 bg-gray-50" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <p className="text-agl-yellow font-semibold uppercase tracking-wider text-sm mb-2">
            CÓMO FUNCIONA
          </p>
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            Líneas de Productos
          </h2>
          <p className="text-agl-gray max-w-3xl mx-auto mb-12">
            Contamos con amplio stock de accesorios de PVC para instalaciones eléctricas. 
            Productos de alta calidad disponibles para entrega inmediata.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden group transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 150}ms`,
              }}
            >
              {/* Image Container */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center min-h-[200px] relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-agl-blue/5 to-transparent"></div>
                
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-32 h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Step badge */}
                <div className="absolute top-4 right-4 bg-agl-yellow text-agl-blue text-xs font-bold px-3 py-1 rounded-full">
                  {product.step}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-headings text-xl font-bold text-agl-blue mb-3">
                  {product.name}
                </h3>
                <p className="text-agl-gray text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Read More Link */}
                <button className="text-agl-yellow font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 group/btn">
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
