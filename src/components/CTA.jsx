import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { FileText } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white" id="cotizar">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}>
        <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-6">
          ¿Tienes una obra en curso?
        </h2>
        <p className="text-xl text-gray-500 mb-10">
          Envíanos tu lista de materiales y te respondemos con una cotización
          detallada en menos de 24 horas
        </p>
        <Link to="/cotizacion">
          <Button variant="primary" size="xl" icon={FileText}>
            Enviar lista de materiales
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
