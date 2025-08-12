
import React, { useState, useCallback } from 'react';
import Calculator from './components/Calculator';
import { evaluateExpression } from './utils/calculator';

const App: React.FC = () => {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [justCalculated, setJustCalculated] = useState<boolean>(false);

  const handleButtonClick = useCallback((value: string, type: string) => {
    if (type === 'clear') {
      if (value === 'C') {
        setExpression('');
        setResult('');
        setJustCalculated(false);
      } else if (value === 'DEL') {
        if (justCalculated) {
          setExpression('');
          setResult('');
          setJustCalculated(false);
        } else {
          setExpression((prev) => prev.slice(0, -1));
        }
      }
      return;
    }

    if (type === 'eq') {
      if (expression) {
        const evalResult = evaluateExpression(expression);
        setResult(evalResult);
        setJustCalculated(true);
      }
      return;
    }

    let nextExpression = expression;
    
    if (justCalculated) {
      if (['op', 'num', 'const'].includes(type)) {
        // If an operator is pressed, use the result. Otherwise, start a new expression.
        nextExpression = type === 'op' ? result : '';
      } else {
        nextExpression = '';
      }
      setResult('');
      setJustCalculated(false);
    }
    
    let toAppend = value;
    if (value === '*') toAppend = '*'; // Internally use '*' for multiplication
    
    if (type === 'func') {
      toAppend = `${value}(`;
    }

    setExpression(nextExpression + toAppend);

  }, [expression, result, justCalculated]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
        <Calculator 
            expression={expression}
            result={result}
            onButtonClick={handleButtonClick}
        />
    </div>
  );
};

export default App;
