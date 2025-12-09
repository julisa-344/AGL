import { useState, useEffect, useRef } from 'react';
import { Award, Building2, Package, Truck } from 'lucide-react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    {
      value: 20,
      suffix: "+",
      label: "años en el mercado",
      icon: Award,
      color: "text-yellow-500",
    },
    {
      value: 300,
      suffix: "+",
      label: "obras atendidas",
      icon: Building2,
      color: "text-blue-500",
    },
    {
      value: 800,
      suffix: "+",
      label: "referencias en catálogo",
      icon: Package,
      color: "text-green-500",
    },
    {
      value: 48,
      suffix: "h",
      label: "entregas rápidas",
      icon: Truck,
      color: "text-orange-500",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  const IconComponent = metric.icon;

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
      className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 text-center border-b-4 border-agl-yellow transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Icon - sin animación de rebote */}
      <div className="flex justify-center mb-4">
        <div className={`${metric.color} p-4 bg-gray-50 rounded-full transition-transform duration-300 hover:scale-110`}>
          <IconComponent className="w-10 h-10" strokeWidth={2} />
        </div>
      </div>

      {/* Counter */}
      <div className="text-5xl font-bold text-agl-blue mb-2 tabular-nums">
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
