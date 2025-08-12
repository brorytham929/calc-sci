
import React from 'react';
import Display from './Display';
import Button from './Button';
import type { ButtonConfig } from '../types';

interface CalculatorProps {
  expression: string;
  result: string;
  onButtonClick: (value: string, type: string) => void;
}

const buttons: ButtonConfig[] = [
  { value: 'sin', type: 'func' }, { value: 'cos', type: 'func' }, { value: 'tan', type: 'func' }, { value: 'C', type: 'clear' }, { value: 'DEL', type: 'clear' },
  { value: 'ln', type: 'func' }, { value: 'log', type: 'func' }, { value: '√', type: 'func' }, { value: '(', type: 'op' }, { value: ')', type: 'op' },
  { value: '7', type: 'num' }, { value: '8', type: 'num' }, { value: '9', type: 'num' }, { value: '^', type: 'op' }, { value: '!', type: 'op' },
  { value: '4', type: 'num' }, { value: '5', type: 'num' }, { value: '6', type: 'num' }, { value: '*', type: 'op' }, { value: '/', type: 'op' },
  { value: '1', type: 'num' }, { value: '2', type: 'num' }, { value: '3', type: 'num' }, { value: '+', type: 'op' }, { value: '-', type: 'op' },
  { value: '0', type: 'num', span: 2 }, { value: '.', type: 'num' }, { value: 'π', type: 'const' }, { value: '=', type: 'eq' },
];

const Calculator: React.FC<CalculatorProps> = ({ expression, result, onButtonClick }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-6">
      <Display expression={expression} result={result} />
      <div className="grid grid-cols-5 gap-3">
        {buttons.map((btn) => (
          <Button
            key={btn.value}
            value={btn.value}
            onClick={onButtonClick}
            type={btn.type}
            span={btn.span}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
