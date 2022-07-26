import { useCallback } from 'react';
import { useSelector, useDispatch } from "../my-react-redux";

export default function ReactReduxHookPage(props) {
  const count = useSelector(({ count }) => count);

  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch({ type: 'ADD' });
  }, []);

  return (
    <div>
      <h3>ReactReduxHookPage</h3>

      <button onClick={add}>{count}</button>
    </div>
  );
}
