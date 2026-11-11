import { useState } from 'react'
import { ALL, categories, jokesFor } from './jokes'
import './App.css'

function pickIndex(list, exclude) {
  if (list.length < 2) return 0
  let next = exclude
  while (next === exclude) {
    next = Math.floor(Math.random() * list.length)
  }
  return next
}

function App() {
  const [category, setCategory] = useState(ALL)
  const [index, setIndex] = useState(() => pickIndex(jokesFor(ALL), -1))
  const [revealed, setRevealed] = useState(false)
  const [groans, setGroans] = useState(0)

  const list = jokesFor(category)
  const joke = list[index]

  function reveal() {
    setRevealed(true)
    setGroans((n) => n + 1)
  }

  function nextJoke() {
    setIndex((current) => pickIndex(list, current))
    setRevealed(false)
  }

  function chooseCategory(id) {
    if (id === category) return
    setCategory(id)
    setIndex(pickIndex(jokesFor(id), -1))
    setRevealed(false)
  }

  const options = [{ id: ALL, label: 'All' }, ...categories]

  return (
    <>
      <section id="center">
        <h1>Corny Jokes</h1>

        <div className="categories" role="group" aria-label="Joke category">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`category${option.id === category ? ' active' : ''}`}
              aria-pressed={option.id === category}
              onClick={() => chooseCategory(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="joke-card">
          <p className="setup">{joke.setup}</p>
          <p className="punchline" aria-live="polite">
            {revealed ? joke.punchline : ' '}
          </p>
        </div>

        {revealed ? (
          <button type="button" className="action" onClick={nextJoke}>
            Hit me with another one
          </button>
        ) : (
          <button type="button" className="action" onClick={reveal}>
            Hit me with the punchline
          </button>
        )}

        <p className="groans">
          {groans === 0 ? 'No groans yet. Tough crowd.' : `Groans delivered: ${groans}`}
        </p>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
