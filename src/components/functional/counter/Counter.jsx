import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <div>
      <section className='section' style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '1rem' }}>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <h2 style={{ margin: '1rem' }}>complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase
        </button>
      </section>
      ;
    </div>
  );
}

export default Counter;
