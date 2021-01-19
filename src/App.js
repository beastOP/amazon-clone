import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Amazon from './frontend/Amazon'

function App() {
  return (
    <Router>
      <div className="App">
        <Amazon />
      </div>
    </Router>
  );
}

export default App;
