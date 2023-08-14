import {useState} from 'react';

import { evaluate, round, string } from 'mathjs';
import './App.css';

function App() {
  const [formula, updateFormula] = useState('');
  // const [result, updateResult] = useState(0);
  const [displayValue, updateDisplayValue] = useState('0');

  const handleKeyClick = (key) => {
    // update the formula
    if (formula.length > 0) {
      if (['+', '-', '*', '/'].includes(formula.slice(-1))) { // ends with operator
        if (['+', '*', '/'].includes(key)) {
          if (formula.slice(-1) == '-' && ['+', '-', '*', '/'].includes(formula.slice(-2, -1))) {
            updateFormula(previousFormula => previousFormula.slice(0, -2) + key);
          }
          else {
            updateFormula(previousFormula => previousFormula.slice(0, -1) + key);
          }
        }
        else if (key == '-' && ['+', '-', '*', '/'].includes(formula.slice(-2, -1))) {
          return;
        }
        else if (key === '.') {
          updateFormula(previousFormula => previousFormula + '0' + key);
        }
        else {
          updateFormula(previousFormula => previousFormula + key);
        }
      }
      else if (formula.slice(-1) === '.') { //ends with decimal
        if (key === '.') {
          return;
        }
        else {
          updateFormula(previousFormula => previousFormula + key);
        }
      }
      else if (formula === 'Infinity' || formula === 'NaN') {
        if (['+', '-', '*', '/'].includes(key)) {
          updateFormula(previousFormula => previousFormula + key);
        }
      }
      else { //ends with number
        if (formula.split(/\+|-|\*|\//).pop().includes('.') && key === '.') { // number already has decimal
          return;
        }
        else {
          updateFormula(previousFormula => previousFormula + key);
        }
      }
    }
    else {
      if (key === '.') {
        updateFormula(previousFormula => previousFormula + '0' + key);
      }
      else if (['+', '-', '*', '/', '='].includes(key)) {
        return;
      }
      else {
        updateFormula(previousFormula => previousFormula + key);
      }
    }

    // update the display value
    if (displayValue === '0') {
      if (['0','1','2','3','4','5','6','7','8','9'].includes(key)) {
        updateDisplayValue(key);
      }
      else if (key === '.') {
        updateDisplayValue('0.');
      }
    }
    else if (['0','1','2','3','4','5','6','7','8','9'].includes(displayValue.slice(-1))) {
      if (['0','1','2','3','4','5','6','7','8','9', '.'].includes(key)) {
        updateDisplayValue(previousValue => previousValue + key);
      }
      else if (['+', '-', '*', '/'].includes(key)) {
        updateDisplayValue(key);
      }
    }
    else if (['+', '-', '*', '/'].includes(displayValue)) {
      if (['+', '-', '*', '/', '0','1','2','3','4','5','6','7','8','9'].includes(key)) {
        updateDisplayValue(key);
      }
      else if (key === '.') {
        updateDisplayValue('0.');
      }
    }
    else if (displayValue.slice(-1) === '.') {
      if (['0','1','2','3','4','5','6','7','8','9'].includes(key)) {
        updateDisplayValue(previousValue => previousValue + key);
      }
    }
  };

  const handleClear = () => {
    updateFormula('');
    updateDisplayValue('0');
  };

  const calculateResult = () => {
    if (formula === '') {
      return;
    }
    let result = string(round(evaluate(formula), 6));
    updateFormula(result);
    updateDisplayValue(result);
  };

  return (
    <>
      <div id='calculator'>
        <div className='screen' id='formula'>{formula}</div>
        <div className='screen' id='display'>{displayValue}</div>
        <div className='key' id="clear" onClick={handleClear}>AC</div>
        <div className='operator-key key' id="divide" onClick={() => handleKeyClick('/')}>/</div>
        <div className='operator-key key' id="multiply" onClick={() => handleKeyClick('*')}>*</div>
        <div className='numeric-key key' id="seven" onClick={() => handleKeyClick('7')}>7</div>
        <div className='numeric-key key' id="eight" onClick={() => handleKeyClick('8')}>8</div>
        <div className='numeric-key key' id="nine" onClick={() => handleKeyClick('9')}>9</div>
        <div className='operator-key key' id="subtract" onClick={() => handleKeyClick('-')}>-</div>
        <div className='numeric-key key' id="four" onClick={() => handleKeyClick('4')}>4</div>
        <div className='numeric-key key' id="five" onClick={() => handleKeyClick('5')}>5</div>
        <div className='numeric-key key' id="six" onClick={() => handleKeyClick('6')}>6</div>
        <div className='operator-key key' id="add" onClick={() => handleKeyClick('+')}>+</div>
        <div className='numeric-key key' id="one" onClick={() => handleKeyClick('1')}>1</div>
        <div className='numeric-key key' id="two" onClick={() => handleKeyClick('2')}>2</div>
        <div className='numeric-key key' id="three" onClick={() => handleKeyClick('3')}>3</div>
        <div className='key' id="equals" onClick={calculateResult}>=</div>
        <div className='numeric-key key' id="zero" onClick={() => handleKeyClick('0')}>0</div>
        <div className='numeric-key key' id="decimal" onClick={() => handleKeyClick('.')}>.</div>
      </div>
    </>
  );
}

export default App;
