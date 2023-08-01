import {useState} from 'react';

import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [formula, updateFormula] = useState('');
  const [result, updateResult] = useState(0);

  const handleKeyClick = (key) => {
    updateFormula(previousFormula => previousFormula + key);
  };

  const handleClear = () => {
    updateFormula('');
    updateResult(0);
  };

  const calculateResult = () => {
    let result = evaluate(formula);
    console.log('---', result);
    updateResult(result);
    updateFormula(result);
  };

  return (
    <>
      <div id='calculator'>
        <div className='screen' id='formula'>{formula}</div>
        <div className='screen' id='display'>{result}</div>
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
