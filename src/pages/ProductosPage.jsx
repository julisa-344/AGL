import { useState } from 'react';
import { Search, Filter, FileText } from 'lucide-react';
import Button from '../components/Button';

const ProductosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const products = [
    {
      id: 1,
      name: "Uniones",
      category: "Conexiones",
      image: "/assets/union.png",
      description: "Uniones de PVC de alta resistencia para conexiones seguras y duraderas en tus instalaciones eléctricas.",
      features: [
        "Alta resistencia",
        "Fácil instalación",
        "Múltiples diámetros",
        "Certificado de calidad"
      ],
      specs: {
        material: "PVC Schedule 40",
        diametros: "½\" - 4\"",
        presion: "Hasta 150 PSI",
        temperatura: "-10°C a 60°C"
      }
    },
    {
      id: 2,
      name: "Conectores",
      category: "Conexiones",
      image: "/assets/conector.png",
      description: "Conectores profesionales que garantizan compatibilidad total y facilidad de instalación en cualquier proyecto.",
      features: [
        "Compatibilidad universal",
        "Instalación rápida",
        "Sello hermético",
        "Resistente a químicos"
      ],
      specs: {
        material: "PVC Schedule 40",
        diametros: "½\" - 3\"",
        presion: "Hasta 200 PSI",
        temperatura: "-10°C a 70°C"
      }
    },
    {
      id: 3,
      name: "Curvas",
      category: "Accesorios",
      image: "/assets/curva.png",
      description: "Curvas y codos en diferentes ángulos y diámetros para adaptarse a las necesidades específicas de tu obra.",
      features: [
        "Ángulos de 45° y 90°",
        "Sin pérdida de presión",
        "Variedad de diámetros",
        "Acabado profesional"
      ],
      specs: {
        material: "PVC Schedule 40/80",
        diametros: "½\" - 6\"",
        angulos: "45°, 90°",
        temperatura: "-10°C a 65°C"
      }
    },
    {
      id: 4,
      name: "Separadores",
      category: "Accesorios",
      image: "/assets/separadorr.png",
      description: "Separadores y tees para ramificaciones profesionales que mantienen la organización de tus instalaciones.",
      features: [
        "Ramificaciones múltiples",
        "Diseño ergonómico",
        "Fácil mantenimiento",
        "Duración extendida"
      ],
      specs: {
        material: "PVC Schedule 40",
        diametros: "½\" - 4\"",
        tipos: "Tee, Cruz, Reducción",
        temperatura: "-10°C a 60°C"
      }
    },
  ];

  const categories = ['Todos', 'Conexiones', 'Accesorios'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-agl-blue text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-agl-yellow font-semibold text-sm uppercase tracking-widest mb-3">
              Nuestro Catálogo
            </p>
            <h1 className="font-headings text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Líneas de Productos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Amplio stock de accesorios de PVC para instalaciones eléctricas. Productos de alta calidad disponibles para entrega inmediata.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No se encontraron productos</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-agl-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headings text-3xl sm:text-4xl font-bold mb-6">
            ¿Necesitas asesoría técnica?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nuestro equipo de expertos está listo para ayudarte a elegir los productos correctos para tu proyecto.
          </p>
          <a href="/contacto" className="inline-block">
            <Button variant="secondary" size="lg">
              Contactar a un asesor
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

// Componente de tarjeta de producto
const ProductCard = ({ product, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Image with gradient background */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-agl-yellow text-agl-blue px-3 py-1 rounded-full text-xs font-bold uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-headings text-2xl font-bold text-agl-blue mb-3">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-agl-blue mb-2 text-sm uppercase tracking-wide">
            Características
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-agl-yellow rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left border-t pt-4 flex items-center justify-between text-agl-blue font-semibold hover:text-agl-yellow transition-colors"
        >
          <span>Especificaciones técnicas</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* Specifications Content */}
        {isExpanded && (
          <div className="mt-4 space-y-2 text-sm animate-fade-in">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 capitalize">{key}:</span>
                <span className="text-agl-blue font-medium">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-6">
          <a href="/cotizacion" className="block">
            <Button variant="primary" size="md" icon={FileText} fullWidth>
              Solicitar cotización
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
