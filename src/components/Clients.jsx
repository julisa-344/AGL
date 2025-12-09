import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = [
    {
      name: 'V&V',
      logo: '/assets/vv.png',
      description: 'Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.'
    },
    {
      name: 'Electro Corrales',
      logo: '/assets/EC.png',
      description: 'Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.'
    },
    {
      name: 'Inarco',
      logo: '/assets/inarco.png',
      description: 'Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.'
    }
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
    <section ref={sectionRef} className="py-20 bg-agl-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-agl-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}>
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-white mb-4">
            Constructoras que Confían en Nosotros
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Empresas líderes que eligen AGL para sus proyectos
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`,
              }}
            >
              {/* Logo container - corta el borde superior */}
              <div className="absolute -top-10 left-8 z-20">
                <div className="w-20 h-20 bg-agl-blue flex items-center justify-center group-hover:scale-105 transition-transform duration-300 p-2">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div className="relative bg-transparent border-[3px] border-white/50 rounded-lg p-6 pt-16 hover:bg-white/5 hover:border-white/70 transition-all duration-300 min-h-[180px]">
                {/* Client name - en mayúsculas y negrita */}
                <h3 className="text-left text-sm font-bold text-white uppercase tracking-wider mb-3">
                  {client.name}
                </h3>
                
                {/* Description - alineado a la izquierda */}
                <p className="text-left text-white/70 text-sm leading-relaxed">
                  {client.description}
                </p>

                {/* Hover effect border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
