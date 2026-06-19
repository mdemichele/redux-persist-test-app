# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # type-check with tsc, then bundle with Vite
npm run preview  # preview the production build locally
```

There is no test suite or linter configured.

## Purpose

This is a minimal test/demo app for [`@mdemichele/redux-persist`](https://www.npmjs.com/package/@mdemichele/redux-persist) — a custom fork of `redux-persist`. Its sole purpose is to verify that state persistence works end-to-end: increment the counter, refresh the page, and confirm the value is restored from `localStorage` under the key `"root"`.

## Architecture

**Data flow:**
`main.tsx` mounts a Redux `<Provider>` wrapping `<App>`, which wraps the UI in `<PersistGate>` (blocks render until rehydration completes). `counterSlice.ts` defines the reducer; `store/index.ts` wraps it with `persistReducer` and exports both `store` and `persistor`.

**Key wiring in `src/store/index.ts`:**
- `persistReducer({ key: 'root', storage }, counterReducer)` — persists the counter slice to `localStorage`
- `serializableCheck` middleware is configured to ignore `persist/PERSIST`, `persist/REHYDRATE`, and `persist/REGISTER` actions (required to suppress Redux Toolkit warnings from redux-persist internals)

**Package under test:** `@mdemichele/redux-persist` (imported via its ES module subpath `@mdemichele/redux-persist/es/...`). Changes to how redux-persist is integrated should be validated by running the app and checking that counter values survive a page refresh.
