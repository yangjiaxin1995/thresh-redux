import { useState } from 'react';
import ReduxPage from './pages/ReduxPage';
import HooksPage from './pages/HooksPage';
import ReactReduxPage from './pages/ReactReduxPage';
import ReactReduxHookPage from './pages/ReactReduxHookPage';

export default function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <ReduxPage /> */}
      {/* <HooksPage /> */}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {/* <ReactReduxPage omg={count} /> */}
      <ReactReduxHookPage />
    </div>
  );
}
