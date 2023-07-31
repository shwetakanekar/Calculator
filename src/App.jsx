import './App.css';

function App() {

  return (
    <>
      <div id='calculator'>
        <div className='screen' id='formula'></div>
        <div className='screen' id='display'></div>
        <div className='key' id="clear">AC</div>
        <div className='operator-key key' id="divide">/</div>
        <div className='operator-key key' id="multiply">x</div>
        <div className='numeric-key key' id="seven">7</div>
        <div className='numeric-key key' id="eight">8</div>
        <div className='numeric-key key' id="nine">9</div>
        <div className='operator-key key' id="subtract">-</div>
        <div className='numeric-key key' id="four">4</div>
        <div className='numeric-key key' id="five">5</div>
        <div className='numeric-key key' id="six">6</div>
        <div className='operator-key key' id="add">+</div>
        <div className='numeric-key key' id="one">1</div>
        <div className='numeric-key key' id="two">2</div>
        <div className='numeric-key key' id="three">3</div>
        <div className='key' id="equals">=</div>
        <div className='numeric-key key' id="zero">0</div>
        <div className='numeric-key key' id="decimal">.</div>
      </div>
    </>
  );
}

export default App;
