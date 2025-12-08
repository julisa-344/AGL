import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
    tipoConsulta: 'cotizacion'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <div className="min-h-screen bg-agl-gray-light pt-20">
      {/* Hero Section */}
      <section className="bg-agl-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-headings text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            Contáctanos
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Estamos listos para atender tu proyecto. Cuéntanos qué necesitas.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-headings text-3xl font-bold text-agl-blue mb-8">
                Información de contacto
              </h2>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-lg text-agl-black mb-2">
                      Dirección
                    </h3>
                    <p className="text-agl-gray">
                      Av. Principal 123<br />
                      Lima, Perú<br />
                      Lima 15001
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg text-agl-black mb-2">
                      Teléfonos
                    </h3>
                    <p className="text-agl-gray">
                      <a href="tel:+5119999999" className="hover:text-agl-blue transition-colors">
                        (01) 999-999-999
                      </a>
                      <br />
                      <a href="tel:+51999999999" className="hover:text-agl-blue transition-colors">
                        +51 999 999 999
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-lg text-agl-black mb-2">
                      Email
                    </h3>
                    <p className="text-agl-gray">
                      <a href="mailto:ventas@agl.com.pe" className="hover:text-agl-blue transition-colors">
                        ventas@agl.com.pe
                      </a>
                      <br />
                      <a href="mailto:info@agl.com.pe" className="hover:text-agl-blue transition-colors">
                        info@agl.com.pe
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-semibold text-lg text-agl-black mb-2">
                      Horario de atención
                    </h3>
                    <p className="text-agl-gray">
                      <strong>Lunes - Viernes:</strong><br />
                      8:00 AM - 6:00 PM<br />
                      <strong>Sábados:</strong><br />
                      8:00 AM - 1:00 PM<br />
                      <strong>Domingos:</strong> Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg text-agl-black mb-4">
                  Síguenos en redes
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-4xl hover:scale-110 transition-transform duration-300">
                    📘
                  </a>
                  <a href="#" className="text-4xl hover:scale-110 transition-transform duration-300">
                    📷
                  </a>
                  <a href="#" className="text-4xl hover:scale-110 transition-transform duration-300">
                    💼
                  </a>
                  <a href="#" className="text-4xl hover:scale-110 transition-transform duration-300">
                    💬
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="font-headings text-3xl font-bold text-agl-blue mb-6">
                  Envíanos un mensaje
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="nombre" className="block text-agl-black font-semibold mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-agl-yellow focus:outline-none transition-colors"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="empresa" className="block text-agl-black font-semibold mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-agl-yellow focus:outline-none transition-colors"
                        placeholder="Constructora XYZ"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-agl-black font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-agl-yellow focus:outline-none transition-colors"
                        placeholder="email@ejemplo.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="telefono" className="block text-agl-black font-semibold mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-agl-yellow focus:outline-none transition-colors"
                        placeholder="999 999 999"
                      />
                    </div>
                  </div>

                  {/* Type of inquiry */}
                  <div className="mb-6">
                    <label htmlFor="tipoConsulta" className="block text-agl-black font-semibold mb-2">
                      Tipo de consulta *
                    </label>
                    <select
                      id="tipoConsulta"
                      name="tipoConsulta"
                      value={formData.tipoConsulta}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-agl-yellow focus:outline-none transition-colors"
                    >
                      <option value="cotizacion">Cotización</option>
                      <option value="stock">Consulta de stock</option>
                      <option value="asesoria">Asesoría técnica</option>
                      <option value="reclamo">Reclamo o sugerencia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="mensaje" className="block text-agl-black font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-agl-yellow focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-agl-yellow text-agl-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    Enviar mensaje
                  </button>

                  <p className="text-sm text-agl-gray mt-4 text-center">
                    * Campos obligatorios. Nos comprometemos a responder en menos de 24 horas.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headings text-3xl font-bold text-agl-blue mb-8 text-center">
            Encuéntranos
          </h2>
          <div className="bg-agl-gray-light rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder para mapa - puedes reemplazar con Google Maps embed */}
            <div className="aspect-video bg-gradient-to-br from-agl-blue to-agl-gray flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl font-semibold">Mapa de ubicación</p>
                <p className="text-sm opacity-75">Aquí puedes integrar Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-agl-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headings text-3xl font-bold text-agl-blue mb-12 text-center">
            Canales de atención rápida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💬
              </div>
              <h3 className="font-headings text-xl font-bold text-agl-blue mb-2">
                WhatsApp
              </h3>
              <p className="text-agl-gray mb-4">
                Chatea con nosotros ahora
              </p>
              <span className="text-agl-yellow font-semibold">
                +51 999 999 999 →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:ventas@agl.com.pe"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ✉️
              </div>
              <h3 className="font-headings text-xl font-bold text-agl-blue mb-2">
                Email
              </h3>
              <p className="text-agl-gray mb-4">
                Envíanos un correo
              </p>
              <span className="text-agl-yellow font-semibold">
                ventas@agl.com.pe →
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+5119999999"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📞
              </div>
              <h3 className="font-headings text-xl font-bold text-agl-blue mb-2">
                Llámanos
              </h3>
              <p className="text-agl-gray mb-4">
                Atención inmediata
              </p>
              <span className="text-agl-yellow font-semibold">
                (01) 999-999-999 →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
