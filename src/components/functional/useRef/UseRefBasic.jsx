import { useEffect, useRef } from 'react';

function UseRefBasics() {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  }, []);

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UseRefBasics;
