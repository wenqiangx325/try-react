# React Router

## Getting Started

### Add ```react-router-dom```

```bash
# yarn
# in that day, react-router-dom not support typescript,
# so @types/react-router-dom is needed
yarn add react-router-dom @types/react-router-dom
# or npm is good, too
npm install react-router-dom @types/react-router-dom
```

### Add ```Router``` to root page

```tsx
// add Router(BrowserRouter or HashRouter in a page,
// may index.tsx is a good choose.
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* Router for react-router-dom */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```