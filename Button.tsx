
import React from 'react';
import type { ButtonType } from '../types';

interface ButtonProps {
  value: string;
  onClick: (value: string, type: ButtonType) => void;
  type: ButtonType;
  span?: number;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, type, span }) => {
  const getButtonStyles = (buttonType: ButtonType): string => {
    switch (buttonType) {
      case 'num':
      case 'const':
        return 'bg-gray-600 hover:bg-gray-500 text-white';
      case 'op':
        return 'bg-indigo-500 hover:bg-indigo-400 text-white';
      case 'func':
        return 'bg-purple-500 hover:bg-purple-400 text-white';
      case 'clear':
        return 'bg-red-500 hover:bg-red-400 text-white';
      case 'eq':
        return 'bg-green-500 hover:bg-green-400 text-white';
      default:
        return 'bg-gray-700 hover:bg-gray-600 text-white';
    }
  };

  const baseClasses = 'h-16 rounded-lg text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-200 ease-in-out flex items-center justify-center shadow-md';
  const spanClass = span === 2 ? 'col-span-2' : '';
  
  // Use a different character for multiplication display
  const displayValue = value === '*' ? '×' : value;

  return (
    <button
      onClick={() => onClick(value, type)}
      className={`${baseClasses} ${getButtonStyles(type)} ${spanClass}`}
    >
      {displayValue}
    </button>
  );
};

export default Button;
