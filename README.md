# cytora.com - Frontend Interview

> URL preview: https://tc-cytora-frontend-challenge.netlify.app/

## Get Started

### 📚 Install dependencies

```bash
$ npm install
```

### 🚀 Lunch the site!

```bash
$ npm run dev
```

### 🧠 Quick notes

tbd

### 🛠 Tools

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/) HTTP client
- [axios-cache-adapter](https://github.com/RasCarlito/axios-cache-adapter) Caching adapter for axios.
- [localforage](https://github.com/localForage/localForage) Wrapper for localStorage, IndexedDB...
- [Zustand](https://github.com/pmndrs/zustand) state management

### 📸 Screenshots

|                                             |                                             |
| ------------------------------------------- | ------------------------------------------- |
| !["Fail to load"](./img/failed-to-load.png) | !["Initial State"](./img/initial-state.png) |
| !["Half done"](./img/checked.png)           | !["Ready to submit"](./img/done.png)        |

### 🖊 Improvments

- reliability: e2e + unit testing
- refactor: every list view is quite similar, even the hooks. Try to abstract it to reduce loc.
- feat: keep in sync search with url so it persist the state if we reload the page
- feat: mobile view / responsive
- feat: add species, films category
- feat: persist favourites in localStorage
- fix: investiage / use react suspense to show less spinners
- performance: instead of loading entity and afterwards fetch their properties, fetch everything before load entity
- performance: load only necessary fonts and weights
- feat: show an image together with the name
- style: add styling to buttons
