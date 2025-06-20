import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(a + b);
        break;
      case 'subtract':
        setResult(a - b);
        break;
      case 'multiply':
        setResult(a * b);
        break;
      case 'divide':
        b === 0 ? setResult('Cannot divide by zero') : setResult(a / b);
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      &nbsp;
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />
      <button onClick={() => handleCalculation('add')}>Add</button>
      <button onClick={() => handleCalculation('subtract')}>Subtract</button>
      <button onClick={() => handleCalculation('multiply')}>Multiply</button>
      <button onClick={() => handleCalculation('divide')}>Divide</button>
      <br /><br />
      <div><strong>Result:</strong> {result !== null ? result : '-'}</div>
    </div>
  );
}

export default Calculator;
