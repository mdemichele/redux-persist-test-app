import { PersistGate } from '@mdemichele/redux-persist/es/integration/react'
import { persistor } from './store'
import { Counter } from './components/Counter'

export function App() {
  return (
    <PersistGate loading={<div style={{ textAlign: 'center', marginTop: 80 }}>Loading...</div>} persistor={persistor}>
      <Counter />
    </PersistGate>
  )
}
