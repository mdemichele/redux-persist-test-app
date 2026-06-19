# redux-persist-test-app

A minimal test app for [`@mdemichele/redux-persist`](https://www.npmjs.com/package/@mdemichele/redux-persist), a custom implementation of redux-persist built from scratch.

## Purpose

This app exists to verify that `@mdemichele/redux-persist` works correctly end-to-end. It renders a simple counter backed by a Redux store. When you increment the counter and refresh the page, the value should be restored automatically from `localStorage` — confirming that state persistence and rehydration are functioning as expected.

## How It Works

The counter slice is wrapped with `persistReducer` using `localStorage` as the storage engine and `"root"` as the persistence key. On app startup, `PersistGate` blocks rendering until the persisted state has been rehydrated into the store. This mirrors the standard redux-persist integration pattern.

## Getting Started

```bash
git clone https://github.com/mdemichele/redux-persist-test-app.git
cd redux-persist-test-app
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Testing Persistence

1. Open the app in your browser.
2. Click **+** to increment the counter a few times.
3. Refresh the page.
4. The counter should display the same value — restored from `localStorage` under the key `"root"`.

You can inspect the persisted value directly in your browser's DevTools under **Application → Local Storage**.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

## Stack

- [React](https://react.dev/) 18
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [react-redux](https://react-redux.js.org/)
- [@mdemichele/redux-persist](https://www.npmjs.com/package/@mdemichele/redux-persist)
- [Vite](https://vitejs.dev/) + TypeScript
