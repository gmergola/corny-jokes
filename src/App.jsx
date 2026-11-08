import { useState } from 'react'
import { jokes } from './jokes'
import './App.css'

function pickIndex(exclude) {
  let next = exclude
  while (next === exclude) {
    next = Math.floor(Math.random() * jokes.length)
  }
  return next
}

function App() {
  const [index, setIndex] = useState(() => pickIndex(-1))
  const [revealed, setRevealed] = useState(false)
  const [groans, setGroans] = useState(0)

  const joke = jokes[index]

  function reveal() {
    setRevealed(true)
    setGroans((n) => n + 1)
  }

  function nextJoke() {
    setIndex((current) => pickIndex(current))
    setRevealed(false)
  }

  return (
    <>
      <section id="center">
        <h1>Corny Jokes</h1>

        <div className="joke-card">
          <p className="setup">{joke.setup}</p>
          <p className="punchline" aria-live="polite">
            {revealed ? joke.punchline : '\u00a0'}
          </p>
        </div>

        {revealed ? (
          <button type="button" className="action" onClick={nextJoke}>
            Another one
          </button>
        ) : (
          <button type="button" className="action" onClick={reveal}>
            Hit me with the punchline
          </button>
        )}

        <p className="groans">
          {groans === 0 ? 'No groans yet.' : `Groans delivered: ${groans}`}
        </p>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
