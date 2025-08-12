
const factorial = (n: number): number => {
  if (n < 0 || n !== Math.floor(n)) return NaN; // Factorial only for non-negative integers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
};

export const evaluateExpression = (expr: string): string => {
  if (!expr) return '';

  try {
    // 1. Prepare the expression for evaluation
    let preparedExpr = expr
      .replace(/×/g, '*') // Replace display multiplication symbol
      .replace(/÷/g, '/') // Replace display division symbol
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/√\(/g, 'Math.sqrt(')
      .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
      .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
      .replace(/tan\(/g, 'Math.tan(Math.PI/180*')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/\^/g, '**');

    // Handle factorial: replace n! with factorial(n)
    // This regex handles integers followed by '!'
    preparedExpr = preparedExpr.replace(/(\d+)!/g, (match, num) => `factorial(${num})`);

    // 2. Use the Function constructor for safer, isolated evaluation
    const evaluator = new Function('factorial', `"use strict"; return ${preparedExpr}`);
    
    const result = evaluator(factorial);

    // 3. Format the result
    if (typeof result !== 'number' || !isFinite(result)) {
      return "Error";
    }

    return String(Number(result.toPrecision(14)));

  } catch (error) {
    // Catches syntax errors, etc.
    return "Error";
  }
};
