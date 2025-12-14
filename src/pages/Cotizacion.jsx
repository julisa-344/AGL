import { useState } from 'react';
import Button from '../components/Button';
import { Send, Upload, Plus, Trash2, Package, Phone, Mail, MessageCircle } from 'lucide-react';

const Cotizacion = () => {
  const [formData, setFormData] = useState({
    // Información de Contacto
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
    zona: '',
    
    // Observaciones
    observaciones: ''
  });

  const [productos, setProductos] = useState([
    { id: 1, categoria: 'tubos', descripcion: '', medida: '', cantidad: '', marca: 'tuboplast' }
  ]);

  const [archivo, setArchivo] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProductoChange = (id, field, value) => {
    setProductos(productos.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const agregarProducto = () => {
    const newId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    setProductos([
      ...productos,
      { id: newId, categoria: 'tubos', descripcion: '', medida: '', cantidad: '', marca: 'tuboplast' }
    ]);
  };

  const eliminarProducto = (id) => {
    if (productos.length > 1) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArchivo(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo mostramos en consola
    console.log('Datos del formulario:', formData);
    console.log('Productos:', productos);
    console.log('Archivo:', archivo);
    
    // Simular envío exitoso
    alert('¡Cotización enviada exitosamente! Te responderemos en menos de 24 horas.');
    
    // Aquí integrarías con un servicio de email como EmailJS o un backend
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-agl-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solicita tu Cotización Personalizada
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Completa el formulario y te responderemos con una cotización detallada en menos de 24 horas
          </p>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Información de Contacto */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-agl-blue mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Información de Contacto
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-agl-blue mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-agl-blue mb-2">
                    Empresa / Constructora
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none transition-colors"
                    placeholder="Constructora ABC"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-agl-blue mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none transition-colors"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-agl-blue mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-agl-blue mb-2">
                    Zona de entrega *
                  </label>
                  <input
                    type="text"
                    name="zona"
                    value={formData.zona}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none transition-colors"
                    placeholder="Lima, Callao, etc."
                  />
                </div>
              </div>
            </div>3

            {/* Lista de Productos */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-agl-blue flex items-center gap-2">
                  <Package className="w-6 h-6" />
                  Lista de Productos
                </h2>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  icon={Plus}
                  onClick={agregarProducto}
                >
                  Agregar producto
                </Button>
              </div>

              <div className="space-y-4">
                {productos.map((producto, index) => (
                  <div key={producto.id} className="border-2 border-gray-200 rounded-lg p-4 relative">
                    {productos.length > 1 && (
                      <button
                        type="button"
                        onClick={() => eliminarProducto(producto.id)}
                        className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-agl-blue mb-2">
                          Categoría
                        </label>
                        <select
                          value={producto.categoria}
                          onChange={(e) => handleProductoChange(producto.id, 'categoria', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none text-sm"
                        >
                          <option value="tubos">Tubos</option>
                          <option value="uniones">Uniones</option>
                          <option value="conectores">Conectores</option>
                          <option value="curvas">Curvas</option>
                          <option value="separadores">Separadores</option>
                          <option value="otros">Otros</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-agl-blue mb-2">
                          Descripción / Medida
                        </label>
                        <input
                          type="text"
                          value={producto.descripcion}
                          onChange={(e) => handleProductoChange(producto.id, 'descripcion', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none text-sm"
                          placeholder="Ej: Tubo PVC 2 pulgadas"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-agl-blue mb-2">
                          Cantidad
                        </label>
                        <input
                          type="text"
                          value={producto.cantidad}
                          onChange={(e) => handleProductoChange(producto.id, 'cantidad', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none text-sm"
                          placeholder="100 unid."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-agl-blue mb-2">
                          Marca
                        </label>
                        <select
                          value={producto.marca}
                          onChange={(e) => handleProductoChange(producto.id, 'marca', e.target.value)}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none text-sm"
                        >
                          <option value="tuboplast">Tuboplast</option>
                          <option value="pavco">Pavco</option>
                          <option value="tigre">Tigre</option>
                          <option value="cualquiera">Cualquiera</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opción de subir archivo */}
              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <label className="block text-sm font-semibold text-agl-blue mb-2">
                  O sube tu lista de materiales (Excel, PDF, Imagen)
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex-1 cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-agl-yellow transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {archivo ? archivo.name : 'Click para seleccionar archivo'}
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={handleArchivoChange}
                      accept=".pdf,.xlsx,.xls,.jpg,.jpeg,.png"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Observaciones */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-agl-blue mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Observaciones Adicionales
              </h2>
              
              <textarea
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-agl-yellow focus:outline-none transition-colors resize-none"
                placeholder="Especificaciones técnicas, preferencias, condiciones de pago, etc."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <Button
                type="submit"
                variant="primary"
                size="xl"
                icon={Send}
                fullWidth
              >
                Enviar Solicitud de Cotización
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                * Nos comprometemos a responder en menos de 24 horas
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contacto Directo */}
      <section className="py-16 bg-agl-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            ¿Prefieres contactarnos directamente?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-12 h-12 text-agl-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80">Chatea con nosotros</p>
            </a>

            <a
              href="tel:+51999999999"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-12 h-12 text-agl-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
              <p className="text-white/80">+51 999 999 999</p>
            </a>

            <a
              href="mailto:ventas@agl.com"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-agl-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/80">ventas@agl.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-agl-blue text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-agl-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-agl-blue" />
              </div>
              <h3 className="font-bold text-agl-blue mb-2">Todas las Marcas</h3>
              <p className="text-gray-600 text-sm">Trabajamos con Tuboplast y todas las marcas del mercado</p>
            </div>

            <div className="text-center">
              <div className="bg-agl-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-agl-blue" />
              </div>
              <h3 className="font-bold text-agl-blue mb-2">Todas las Medidas</h3>
              <p className="text-gray-600 text-sm">Cualquier diámetro y longitud que necesites</p>
            </div>

            <div className="text-center">
              <div className="bg-agl-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-agl-blue" />
              </div>
              <h3 className="font-bold text-agl-blue mb-2">Venta al Por Mayor</h3>
              <p className="text-gray-600 text-sm">Precios competitivos para grandes volúmenes</p>
            </div>

            <div className="text-center">
              <div className="bg-agl-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-agl-blue" />
              </div>
              <h3 className="font-bold text-agl-blue mb-2">Trabajo Bajo Pedido</h3>
              <p className="text-gray-600 text-sm">Conseguimos exactamente lo que necesitas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cotizacion;
