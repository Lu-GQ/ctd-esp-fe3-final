import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalProvider } from './Components/utils/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
      <App />
  </GlobalProvider>
);



