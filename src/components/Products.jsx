const Products = () => {
  const products = [
    {
      name: "Uniones",
      icon: "🔗",
      description: "Para conexiones seguras y duraderas",
    },
    {
      name: "Codos y curvas",
      icon: "↩️",
      description: "Diferentes ángulos y diámetros",
    },
    {
      name: "Tees",
      icon: "⊥",
      description: "Ramificaciones profesionales",
    },
    {
      name: "Adaptadores",
      icon: "🔧",
      description: "Compatibilidad total",
    },
    {
      name: "Tapones",
      icon: "⭕",
      description: "Sellado perfecto",
    },
    {
      name: "Accesorios",
      icon: "⚙️",
      description: "Complementos técnicos",
    },
  ];

  return (
    <section className="py-20 bg-agl-gray-light" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            Líneas de productos en stock
          </h2>
          <div className="w-24 h-1 bg-agl-yellow mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Name */}
              <h3 className="font-headings text-2xl font-bold text-agl-blue mb-3">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-agl-gray mb-6">{product.description}</p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center text-agl-yellow font-semibold hover:text-agl-blue transition-colors duration-300"
              >
                Ver más
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
