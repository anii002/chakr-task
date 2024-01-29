import React from 'react';
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/inter"; 
import "@fontsource/inter/400.css";
function App() {
  return (
    <div className="container-fluid App">
      <div className="row">
      <Sidebar/>
      <Dashboard/>
      </div>
    </div>
  );
}

export default App;
