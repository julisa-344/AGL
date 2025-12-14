import { useState, useEffect, useRef } from 'react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    {
      value: 20,
      suffix: "+",
      label: "años en el mercado",
    },
    {
      value: 300,
      suffix: "+",
      label: "obras atendidas",
    },
    {
      value: 800,
      suffix: "+",
      label: "referencias en catálogo",
    },
    {
      value: 48,
      suffix: "h",
      label: "entregas rápidas",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ metric, index, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 1500; // 1.5 segundos
    const startValue = 0;
    const endValue = metric.value;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [isVisible, metric.value, index]);

  return (
    <div
      className={`text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Counter */}
      <div className="text-5xl lg:text-6xl font-bold text-agl-blue mb-2 tabular-nums">
        {count}
        <span className="text-agl-yellow">{metric.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-agl-gray font-medium text-sm uppercase tracking-wide">
        {metric.label}
      </div>
    </div>
  );
};

export default Metrics;
