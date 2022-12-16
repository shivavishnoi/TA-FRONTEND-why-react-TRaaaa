import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import colors from '../../colors.json';
import CardBlock from './components/CardBlock';

function App() {
  let result = [];
  for (let color in colors) {
    result.push(
      <CardBlock color={color} colorArray={colors[color]} key={color} />
    );
  }
  return result;
}

export default App;
