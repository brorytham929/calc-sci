
import React from 'react';

interface DisplayProps {
  expression: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ expression, result }) => {
  return (
    <div className="bg-gray-700/50 rounded-lg p-4 text-right overflow-hidden shadow-inner">
      <div 
        className="calculator-display text-gray-400 text-2xl h-8 mb-2 overflow-x-auto overflow-y-hidden whitespace-nowrap"
        title={expression || 'Expression'}
      >
        {expression || '0'}
      </div>
      <div 
        className="text-white text-5xl font-bold h-14 truncate"
        title={result || 'Result'}
      >
        {result || (expression ? '' : '0')}
      </div>
    </div>
  );
};

export default Display;
