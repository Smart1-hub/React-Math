import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Calculators from './pages/Calculators,';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (

      <div className="App">

        <nav>
          <h1 className="logo">Math Magicians</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/quotes">Quote</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculators />} />
          <Route path="/quotes" element={<Quote />} />
        </Routes>

      </div>
    );
  }
}
export default App;
