import React, { useReducer } from 'react';
import { countReducer } from '../store';

const init = (initArg) => initArg - 0;

const HooksPage = () => {
  const [state, dispatch] = useReducer(countReducer, 0, init);
  return (
    <div>
      <h3>HooksPage</h3>
      <button
        onClick={() => {
          dispatch({ type: 'ADD' });
        }}
      >
        {state}
      </button>
    </div>
  );
};

export default HooksPage;
