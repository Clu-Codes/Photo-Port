import React from 'react'; //may or may not be necessary - not sure.
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
