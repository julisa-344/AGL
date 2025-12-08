const Metrics = () => {
  const metrics = [
    {
      value: "+10 años",
      label: "en el mercado",
      icon: "🏆",
    },
    {
      value: "+300",
      label: "obras atendidas",
      icon: "🏗️",
    },
    {
      value: "+800",
      label: "referencias en catálogo",
      icon: "📦",
    },
    {
      value: "24-48h",
      label: "entregas rápidas",
      icon: "🚚",
    },
  ];

  return (
    <section className="py-16 bg-agl-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border-b-4 border-agl-yellow"
            >
              <div className="text-5xl mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold text-agl-blue mb-2">
                {metric.value}
              </div>
              <div className="text-agl-gray font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
