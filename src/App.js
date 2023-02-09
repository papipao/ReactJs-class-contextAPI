import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from './components/class/contexApi/Context';
import ContextComponent from './components/class/contexApi/ContextComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: true,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((prevTheme) => ({
      darkTheme: !prevTheme.darkTheme,
    }));
  }

  render() {
    return (
      <div className='container'>
        <ThemeProvider value={this.state.darkTheme}>
          <button onClick={this.toggleTheme}>Toggle Theme</button>
          <ContextComponent />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
