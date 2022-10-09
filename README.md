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

I decided to use [React](https://reactjs.org/) since I feel comfortable with it. For state management I believe this could be accomplished with in-build tools like `React.Context` but for the sake of learning I wanted to test out [Zustand](https://github.com/pmndrs/zustand) and I was impressed with how well it works and easy it is to setup. I didn't want to mess up with any CSS framework, even tho I like TailwindCSS I thought it was overkilling for just a few classes I wanted to use.
The most challenging in the project was caching requests, even if I used [React Query](https://tanstack.com/query/v4/docs/overview) in the past it was always revalidating data so I had to search for something else, after finding out about this cache adapter it was good enough for this example. In the Technical specification, it says "client-side caching (LRU) of request" which usually means to have a "capacity" of caching, and since it is not defined I decided that it was good enough.
I spent one and a half days on it, primarily handling styling since I do not have a real design in mind and I thought to move stuff all time around.
As you can check in the #Improvements section there is plenty of improvements, fixes, and features to implement if I could dedicate even more time. I would like to mention that testing is really important to me and I would like to have tested much more but I didn't want to invest a week in a code challenge.

### 🛠 Tools

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/) HTTP client
- [axios-cache-adapter](https://github.com/RasCarlito/axios-cache-adapter) Caching adapter for axios.
- [localforage](https://github.com/localForage/localForage) Wrapper for localStorage, IndexedDB...
- [Zustand](https://github.com/pmndrs/zustand) state management

### 📸 Screenshots

|                                               |                                               |
| --------------------------------------------- | --------------------------------------------- |
| !["People view"](./img/main.png)              | !["Pagination"](./img/pagination.png)         |
| !["Searching"](./img/search.png)              | !["Add favourites"](./img/add_favourites.png) |
| !["Planets view"](./img/planets.png)          | !["Vehicles view"](./img/vehicles.png)        |
| !["Error handling"](./img/error_handling.png) | !["404"](./img/404.png)                       |

### 🖊 Improvements

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
