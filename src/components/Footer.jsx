const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#" },
    { name: "Productos", href: "#productos" },
    { name: "Obras", href: "#obras" },
    { name: "Proveedores", href: "#proveedores" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "WhatsApp", icon: "💬", href: "#" },
  ];

  return (
    <footer className="bg-agl-black text-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="bg-agl-blue text-white font-bold text-3xl px-4 py-2 rounded inline-block mb-4">
              AGL
            </div>
            <p className="text-gray-400 mt-4">
              Accesorios eléctricos de PVC para proyectos profesionales.
              Calidad, stock y servicio garantizado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headings text-xl font-bold mb-4 text-agl-yellow">
              Contacto
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <div>
                  <div>(01) 999-999-999</div>
                  <div>999 999 999</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:ventas@agl.com.pe"
                  className="hover:text-agl-yellow transition-colors duration-300"
                >
                  ventas@agl.com.pe
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <div>
                  Av. Principal 123
                  <br />
                  Lima, Perú
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headings text-xl font-bold mb-4 text-agl-yellow">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-agl-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-headings text-xl font-bold mb-4 text-agl-yellow">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-3xl hover:scale-110 transition-transform duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Horario de atención</h4>
              <p className="text-gray-400 text-sm">
                Lun - Vie: 8:00 AM - 6:00 PM
                <br />
                Sáb: 8:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} AGL Accesorios Eléctricos. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
