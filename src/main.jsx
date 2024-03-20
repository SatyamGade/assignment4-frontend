import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {DataProvider} from './contexts/getData.jsx';
import './styles/admin.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>,
)
