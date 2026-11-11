# Corny Jokes

A frontend-only joke teller built with React and Vite. Pick a category, read the setup, reveal the punchline, and keep count of the groans.

## Features

- Joke categories: Food, Animals, Science & Nature, Everyday Life, or All
- Switching category shows a new random joke from it
- "Hit me with another one" never repeats the joke you just saw
- A groan counter that goes up every time a punchline is revealed

## Getting started

```
npm install
npm run dev
```

The app runs at http://localhost:5173.

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npx playwright test` runs the end-to-end tests in `tests/` (starts the dev server if it is not already running)

## Project structure

- `src/jokes.js` holds the categories and their jokes
- `src/App.jsx` holds the UI and joke selection logic
- `src/App.css` and `src/index.css` hold the styles
- `tests/` holds the Playwright tests

## Adding jokes

Add a `{ setup, punchline }` entry to a category's `jokes` array in `src/jokes.js`. To add a category, add a new `{ id, label, jokes }` object to `categories`.
