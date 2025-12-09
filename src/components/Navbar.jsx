import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { FileText } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/#productos' },
    { name: 'Cotización', href: '/cotizacion' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/contacto') return location.pathname === '/contacto';
    if (href === '/cotizacion') return location.pathname === '/cotizacion';
    return false;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/LOGO.png" 
                alt="AGL Accesorios Eléctricos" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    isActive(item.href) 
                      ? 'text-agl-blue border-b-2 border-agl-yellow' 
                      : 'text-agl-gray hover:text-agl-blue'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    isActive(item.href) 
                      ? 'text-agl-blue border-b-2 border-agl-yellow' 
                      : 'text-agl-gray hover:text-agl-blue'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+51992778266"
              className="text-agl-blue font-semibold hover:text-agl-yellow transition-colors duration-300"
            >
              📞 (51) 992-778-266
            </a>
            <Link to="/cotizacion">
              <Button variant="primary" icon={FileText}>
                Cotizar ahora
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-agl-gray hover:text-agl-blue focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-agl-gray hover:text-agl-blue hover:bg-agl-gray-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-agl-gray hover:text-agl-blue hover:bg-agl-gray-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="tel:+51999999999"
              className="block px-3 py-2 text-agl-blue font-semibold"
            >
              📞 (01) 999-999-999
            </a>
            <div className="px-3 py-2">
              <Link
                to="/cotizacion"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="primary" icon={FileText} fullWidth>
                  Cotizar ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
