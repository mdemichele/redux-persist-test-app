import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { increment, decrement, reset } from '../store/counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '80px auto', textAlign: 'center' }}>
      <h1>redux-persist test app</h1>
      <p style={{ color: '#666', fontSize: 14 }}>
        Increment the counter, then refresh the page — the value should be restored from localStorage.
      </p>
      <div style={{ fontSize: 64, margin: '32px 0' }}>{count}</div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button onClick={() => dispatch(decrement())} style={btnStyle}>−</button>
        <button onClick={() => dispatch(increment())} style={btnStyle}>+</button>
        <button onClick={() => dispatch(reset())} style={{ ...btnStyle, background: '#eee', color: '#333' }}>
          Reset
        </button>
      </div>
      <p style={{ marginTop: 40, fontSize: 12, color: '#999' }}>
        State is persisted under the key <code>"root"</code> in localStorage.
      </p>
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  padding: '12px 28px',
  fontSize: 20,
  border: 'none',
  borderRadius: 6,
  background: '#4f46e5',
  color: '#fff',
  cursor: 'pointer',
}
