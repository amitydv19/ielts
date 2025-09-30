import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the IELTSInstituteHome component (renamed to App for standard)
import './index.css'; // Import Tailwind and global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
