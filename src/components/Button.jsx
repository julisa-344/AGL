import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false
}) => {
  // Variantes de estilo
  const variants = {
    primary: `
      bg-agl-yellow text-agl-blue 
      hover:bg-yellow-500 
      active:bg-yellow-600
      disabled:bg-gray-300 disabled:text-gray-500
      shadow-lg hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-200
    `,
    secondary: `
      bg-agl-blue text-white 
      hover:bg-blue-800 
      active:bg-blue-900
      disabled:bg-gray-300 disabled:text-gray-500
      shadow-lg hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-200
    `,
    outline: `
      bg-transparent text-agl-blue 
      border-2 border-agl-blue
      hover:bg-agl-blue hover:text-white
      active:bg-blue-900
      disabled:border-gray-300 disabled:text-gray-500
      transition-all duration-200
    `,
    ghost: `
      bg-transparent text-agl-blue 
      hover:bg-agl-blue/10
      active:bg-agl-blue/20
      disabled:text-gray-500
      transition-all duration-200
    `,
    danger: `
      bg-red-600 text-white 
      hover:bg-red-700 
      active:bg-red-800
      disabled:bg-gray-300 disabled:text-gray-500
      shadow-lg hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-200
    `,
    success: `
      bg-green-600 text-white 
      hover:bg-green-700 
      active:bg-green-800
      disabled:bg-gray-300 disabled:text-gray-500
      shadow-lg hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-200
    `
  };

  // Tamaños
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  // Tamaños de iconos
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded
    focus:outline-none focus:ring-4 focus:ring-offset-2
    focus:ring-agl-yellow/50
    disabled:cursor-not-allowed disabled:transform-none
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={iconSizes[size]} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={iconSizes[size]} />
      )}
    </button>
  );
};

export default Button;
