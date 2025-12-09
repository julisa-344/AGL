import React from 'react';
import Button from '../components/Button';
import { 
  ShoppingCart, 
  Download, 
  ArrowRight, 
  Send, 
  Trash2, 
  Check,
  Heart,
  Share2,
  Plus,
  Edit
} from 'lucide-react';

const ButtonDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-agl-blue mb-4">
            Sistema de Botones AGL
          </h1>
          <p className="text-xl text-gray-600">
            Componente Button con todas las variantes y estados
          </p>
        </div>

        {/* Variantes */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Variantes</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primario</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Peligro</Button>
            <Button variant="success">Éxito</Button>
          </div>
        </section>

        {/* Tamaños */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Tamaños</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Pequeño</Button>
            <Button size="md">Mediano</Button>
            <Button size="lg">Grande</Button>
            <Button size="xl">Extra Grande</Button>
          </div>
        </section>

        {/* Con Iconos - Izquierda */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Con Iconos (Izquierda)</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={ShoppingCart}>
              Comprar Ahora
            </Button>
            <Button variant="secondary" icon={Download}>
              Descargar
            </Button>
            <Button variant="outline" icon={Send}>
              Enviar
            </Button>
            <Button variant="ghost" icon={Heart}>
              Me Gusta
            </Button>
            <Button variant="danger" icon={Trash2}>
              Eliminar
            </Button>
            <Button variant="success" icon={Check}>
              Confirmar
            </Button>
          </div>
        </section>

        {/* Con Iconos - Derecha */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Con Iconos (Derecha)</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={ArrowRight} iconPosition="right">
              Siguiente
            </Button>
            <Button variant="secondary" icon={Share2} iconPosition="right">
              Compartir
            </Button>
            <Button variant="outline" icon={Plus} iconPosition="right">
              Agregar
            </Button>
          </div>
        </section>

        {/* Solo Iconos */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Solo Iconos</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={Edit} className="!px-3" />
            <Button variant="secondary" icon={Heart} className="!px-3" />
            <Button variant="outline" icon={Share2} className="!px-3" />
            <Button variant="ghost" icon={Plus} className="!px-3" />
          </div>
        </section>

        {/* Estados Deshabilitados */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Estados Deshabilitados</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>
              Primario Deshabilitado
            </Button>
            <Button variant="secondary" disabled>
              Secundario Deshabilitado
            </Button>
            <Button variant="outline" disabled>
              Outline Deshabilitado
            </Button>
            <Button variant="primary" disabled icon={ShoppingCart}>
              Con Icono Deshabilitado
            </Button>
          </div>
        </section>

        {/* Ancho Completo */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Ancho Completo</h2>
          <div className="space-y-4 max-w-md">
            <Button variant="primary" fullWidth>
              Botón Ancho Completo
            </Button>
            <Button variant="secondary" fullWidth icon={Download}>
              Con Icono Ancho Completo
            </Button>
          </div>
        </section>

        {/* Diferentes Tamaños con Iconos */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Tamaños con Iconos</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm" icon={ShoppingCart}>
              Pequeño
            </Button>
            <Button variant="primary" size="md" icon={ShoppingCart}>
              Mediano
            </Button>
            <Button variant="primary" size="lg" icon={ShoppingCart}>
              Grande
            </Button>
            <Button variant="primary" size="xl" icon={ShoppingCart}>
              Extra Grande
            </Button>
          </div>
        </section>

        {/* Ejemplos de Uso */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-agl-blue mb-6">Ejemplos de Uso</h2>
          <div className="space-y-6">
            {/* Formulario */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Formulario</h3>
              <div className="flex gap-4">
                <Button variant="primary" icon={Send}>
                  Enviar
                </Button>
                <Button variant="outline">
                  Cancelar
                </Button>
              </div>
            </div>

            {/* Carrito de Compras */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Carrito de Compras</h3>
              <div className="flex gap-4">
                <Button variant="primary" icon={ShoppingCart}>
                  Agregar al Carrito
                </Button>
                <Button variant="secondary" icon={Heart}>
                  Favoritos
                </Button>
              </div>
            </div>

            {/* Acciones Peligrosas */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Acciones Peligrosas</h3>
              <div className="flex gap-4">
                <Button variant="danger" icon={Trash2}>
                  Eliminar Cuenta
                </Button>
                <Button variant="outline">
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemo;
