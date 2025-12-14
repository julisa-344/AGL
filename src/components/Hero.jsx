import { Link } from 'react-router-dom';
import Button from './Button';
import { ShoppingBag, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/hero.jpg"
          alt="Construcción industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-agl-blue/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headings font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 leading-tight animate-fade-in-up">
          Accesorios de PVC para
          <br />
          <span className="text-agl-yellow animate-fade-in-up animation-delay-200">proyectos exigentes</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 font-light">
          Stock permanente, entrega rápida y asesoría técnica para tu obra
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
          <a href="#productos">
            <Button variant="primary" size="lg" icon={ShoppingBag}>
              Ver catálogo completo
            </Button>
          </a>
          <Link to="/contacto">
            <Button variant="outline" size="lg" icon={Phone} className="!text-white !border-white hover:!bg-white hover:!text-agl-blue">
              Hablar con un asesor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
