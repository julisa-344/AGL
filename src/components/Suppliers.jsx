const Suppliers = () => {
  const suppliers = [
    { name: "Proveedor 1", logo: "P1" },
    { name: "Proveedor 2", logo: "P2" },
    { name: "Proveedor 3", logo: "P3" },
    { name: "Proveedor 4", logo: "P4" },
    { name: "Proveedor 5", logo: "P5" },
    { name: "Proveedor 6", logo: "P6" },
  ];

  return (
    <section className="py-20 bg-white" id="proveedores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            Proveedores certificados
          </h2>
          <div className="w-24 h-1 bg-agl-yellow mx-auto mb-6"></div>
          <p className="text-lg text-agl-gray max-w-2xl mx-auto">
            Trabajamos con los mejores fabricantes para garantizar la calidad y
            durabilidad del PVC en cada proyecto
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className="bg-agl-gray-light p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center aspect-square border-2 border-transparent hover:border-agl-yellow"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-agl-blue">
                  {supplier.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
