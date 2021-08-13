import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import './index.css';
// NOTE: here's how you can add typescript
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// https://create-react-app.dev/docs/adding-typescript/)

// NOTE: generally split each React component into it's own file
ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);