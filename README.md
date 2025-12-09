# AGL Accesorios Eléctricos - Website

Sitio web profesional para AGL Accesorios Eléctricos, empresa especializada en accesorios de PVC para construcción.

## 🚀 Tecnologías

- **React 18** - Framework de JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS v4** - Framework de CSS utility-first
- **@tailwindcss/postcss** - Plugin de PostCSS para Tailwind
- **React Router DOM** - Navegación entre páginas

## 🎨 Paleta de colores

- **Amarillo construcción**: `#F4B400` - Color principal para CTAs
- **Azul corporativo**: `#003E7E` - Color institucional
- **Gris industrial**: `#757575` - Textos secundarios
- **Negro técnico**: `#0F0F0F` - Textos principales
- **Gris claro**: `#F3F4F6` - Fondos alternos

## 📦 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Barra de navegación con menú responsive
│   ├── Hero.jsx            # Sección principal con CTA
│   ├── Metrics.jsx         # Métricas de la empresa
│   ├── FeaturedProjects.jsx # Obras destacadas
│   ├── Clients.jsx         # Constructoras cliente
│   ├── Suppliers.jsx       # Proveedores certificados
│   ├── Products.jsx        # Catálogo de productos
│   ├── ValueProposition.jsx # Propuesta de valor
│   ├── CTA.jsx             # Call to action final
│   └── Footer.jsx          # Pie de página
├── pages/
│   ├── Home.jsx            # Página principal
│   └── Contact.jsx         # Página de contacto
├── App.jsx                 # Componente principal con Router
├── App.css                 # Estilos personalizados
└── index.css               # Directivas de Tailwind
```

## 📄 Páginas

### Home (/)
1. **Navbar** - Navegación fija con logo, menú y botón de cotización
2. **Hero** - Banner principal con imagen industrial y CTAs
3. **Métricas** - 4 tarjetas con datos clave de la empresa
4. **Obras destacadas** - Grid de 3 proyectos importantes
5. **Clientes** - Logo wall de constructoras
6. **Proveedores** - Grid de proveedores certificados
7. **Productos** - Catálogo de 6 líneas principales
8. **Propuesta de valor** - 4 razones para elegir AGL
9. **CTA final** - Llamado a la acción para cotizar
10. **Footer** - Información de contacto y enlaces

### Contacto (/contacto)
1. **Hero de contacto** - Título y descripción
2. **Información de contacto** - Dirección, teléfonos, email, horarios y redes sociales
3. **Formulario de contacto** - Formulario completo con validación
4. **Mapa de ubicación** - Sección para integrar Google Maps
5. **Canales de atención rápida** - WhatsApp, Email y Teléfono

## 🚀 Comandos

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en http://localhost:5173/

### Build
```bash
npm run build
```
Genera la versión optimizada para producción

### Preview
```bash
npm run preview
```
Previsualiza la versión de producción localmente

## ✨ Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves con Tailwind
- ✅ Alto contraste y accesibilidad
- ✅ Componentes reutilizables
- ✅ Navegación por anclas (#ids)
- ✅ Optimizado para SEO
- ✅ Carga rápida con Vite
- ✅ Estilo profesional B2B

## 📝 Personalización

### Modificar colores
Edita `tailwind.config.js` en la sección `theme.extend.colors.agl`

### Cambiar fuentes
Las fuentes están en `index.html` (Google Fonts) y en `tailwind.config.js`

### Actualizar contenido
Cada componente en `src/components/` tiene su propio contenido editable

## 📞 Contacto

- **Teléfono**: (01) 999-999-999
- **Email**: ventas@agl.com.pe
- **Dirección**: Av. Principal 123, Lima, Perú

---

Desarrollado con ❤️ para AGL Accesorios Eléctricos
