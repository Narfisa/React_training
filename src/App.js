import React from 'react';
import { connect } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="App">
      <p> Hello! </p>
    </div>
  );
}

export default connect()(App);
