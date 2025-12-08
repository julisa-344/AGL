const Clients = () => {
  const clients = [
    { name: "Electro Corrales", logo: "EC" },
    { name: "V&V Constructores", logo: "V&V" },
    { name: "Inarco", logo: "INARCO" },
    { name: "OSP Ingeniería", logo: "OSP" },
  ];

  return (
    <section className="py-20 bg-agl-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-headings text-4xl sm:text-5xl font-bold text-agl-blue mb-4">
            Constructoras que confían en nosotros
          </h2>
          <div className="w-24 h-1 bg-agl-yellow mx-auto"></div>
        </div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-agl-blue mb-2">
                  {client.logo}
                </div>
                <div className="text-sm text-agl-gray font-medium">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
