import React, { Component } from 'react';
import { ThemeConsumer } from './Context';

class ContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      padding: '2rem',
      margin: '2rem',
    };
  }
  render() {
    return (
      <ThemeConsumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeConsumer>
    );
  }
}

export default ContextComponent;
