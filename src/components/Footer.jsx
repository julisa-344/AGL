import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  const menuLinks = [
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Productos", href: "/#productos" },
    { name: "Proyectos", href: "/#obras" },
    { name: "Cotización", href: "/cotizacion" },
  ];

  return (
    <footer className="bg-agl-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
          
          {/* Logo & Description - Columna Izquierda */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-2">AGL</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Accesorios Eléctricos</div>
            </div>
            <p className="text-white/70 text-base leading-relaxed">
              Accesorios eléctricos de PVC para proyectos profesionales. Calidad, stock permanente y servicio garantizado.
            </p>
          </div>

          {/* Menu, Ubicación y Escríbenos - Columna Derecha */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-12">
            
            {/* Menu */}
            <div className="flex flex-col min-w-[120px]">
              <h3 className="font-bold text-base mb-6 text-agl-yellow uppercase tracking-wide">
                Menú
              </h3>
              <ul className="space-y-3">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-agl-yellow transition-colors duration-300 text-sm inline-block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-agl-yellow transition-colors duration-300 text-sm inline-block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ubicación */}
            <div className="flex flex-col min-w-[180px]">
              <h3 className="font-bold text-base mb-6 text-agl-yellow uppercase tracking-wide">
                Ubicación
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-agl-yellow flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm leading-relaxed">
                  Av. La Paz 1048, Piso 5<br />
                  Miraflores, Lima, Perú
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col">
              <h3 className="font-bold text-base mb-6 text-agl-yellow uppercase tracking-wide">
                Escríbenos
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Solicita información o cotizaciones
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Escribe tu mensaje..."
                  className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-agl-yellow transition-colors text-sm"
                />
                <Button variant="primary" size="sm" icon={Send} fullWidth>
                  Enviar
                </Button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="tel:+51992778266"
              className="flex items-center gap-2 text-white/70 hover:text-agl-yellow transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+51 992 778 266</span>
            </a>
            <a
              href="mailto:agl.corrales@gmail.com"
              className="flex items-center gap-2 text-white/70 hover:text-agl-yellow transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">agl.corrales@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-xs">
            Todos los derechos reservados ©AGL Accesorios Eléctricos {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
