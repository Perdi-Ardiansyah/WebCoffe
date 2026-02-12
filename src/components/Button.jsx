import React from 'react';

const Button = ({ variant = 'green', children, onClick, className = '', ...props }) => {
  const baseClasses = 'font-bold py-3 px-6 rounded-lg text-lg text-white transition-colors duration-200';

  const variantClasses = {
    green: 'bg-green-600 hover:bg-green-700',
    amber: 'bg-amber-600 hover:bg-amber-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
