import { useState } from 'react'

const API = 'http://localhost:8080/api/calculator'

export default function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function calculate(operation) {
    try {
      setError(null)
      const res = await fetch(`${API}/${operation}?a=${a}&b=${b}`)
      if (!res.ok) throw new Error('Something went wrong')
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '60px auto', fontFamily: 'sans-serif' }}>
      <h2>Calculator</h2>

      <input
        type="number" placeholder="A"
        value={a} onChange={e => setA(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <input
        type="number" placeholder="B"
        value={b} onChange={e => setB(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 16 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        {['add', 'subtract', 'multiply', 'divide'].map(op => (
          <button key={op} onClick={() => calculate(op)}
            style={{ flex: 1, padding: 8, cursor: 'pointer' }}>
            {op}
          </button>
        ))}
      </div>

      {result !== null && (
        <p style={{ fontSize: 24, marginTop: 24 }}>Result: <strong>{result}</strong></p>
      )}
      {error && (
        <p style={{ color: 'red', marginTop: 16 }}>{error}</p>
      )}
    </div>
  )
}