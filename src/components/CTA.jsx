const CTA = () => {
  return (
    <section className="py-20 bg-agl-blue" id="cotizar">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headings text-4xl sm:text-5xl font-bold text-white mb-6">
          ¿Tienes una obra en curso?
        </h2>
        <p className="text-xl text-gray-200 mb-10">
          Envíanos tu lista de materiales y te respondemos con una cotización
          detallada en menos de 24 horas
        </p>
        <a
          href="#contacto"
          className="inline-block bg-agl-yellow text-agl-black font-bold text-lg px-10 py-5 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Enviar lista de materiales
        </a>
      </div>
    </section>
  );
};

export default CTA;
