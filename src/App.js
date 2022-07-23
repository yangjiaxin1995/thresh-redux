import { useState } from 'react';
import ReduxPage from './pages/ReduxPage';
import ReactReduxPage from './pages/ReactReduxPage';

export default function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <ReduxPage /> */}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ReactReduxPage omg={count} />
    </div>
  );
}
