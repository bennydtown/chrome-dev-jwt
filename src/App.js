import React, { Component } from 'react';
import './App.css';
import Form from './form';

const logoSvgPaths = [
  `M59.8,29.1L44.9,44c-1.3-0.5-2.6-0.7-4-0.7c-6.5,0-11.8,5.3-11.8,11.8s5.3,11.8,11.8,11.8
		c6.5,0,11.8-5.3,11.8-11.8c0-1.4-0.3-2.8-0.7-4l0.7-0.7v-4.7h4.7v-4.7h4.7v-4.7h4.7v-7.1H59.8z M43.6,60.5c-0.1,0.6-0.5,1-1.1,1.2
		c-2.1,0.8-4.7,0.4-6.4-1.3c-1.7-1.7-2.2-4.3-1.3-6.4c0.2-0.5,0.7-0.9,1.2-1c0.6-0.1,1.1,0.1,1.6,0.5l5.5,5.5
		C43.6,59.4,43.7,60,43.6,60.5z`,
  `M66.9,29.1h-7.1L44.9,44c-1.3-0.5-2.6-0.7-4-0.7c-6.5,0-11.8,5.3-11.8,11.8
		c0,3.4,1.4,6.4,3.7,8.6l3.3-3.3c-1.7-1.7-2.1-4.2-1.3-6.3c0.2-0.5,0.7-0.9,1.2-1c0.6-0.1,1.1,0.1,1.6,0.5l2.7,2.7l26.6-26.6V29.1z`,
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ width: '80px', height: '80px' }}>
            <svg className="logo-img logo-react"
            viewBox="10 10 80 80"
            role="img" xmlns="http://www.w3.org/2000/svg">
              <title>Dev JWT</title>
              <path
                className="vt-logomark vt-logo__mark--left"
                fill="white"
                d={logoSvgPaths[0]}
              />
              <path
                className="vt-logomark vt-logo__mark--right"
                fill="white"
                d={logoSvgPaths[1]}
              />
            </svg>
          </div>
          <h1 style={{ float: 'right', fontSize: '28px' }} className="App-title">Dev JWT</h1>
        </header>
        <div>
          Create an unsigned JWT for development.
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
