import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from './Button';
import { buttonSize, buttonType } from './buttonInfo';
function App() {
  return (
    <div className="app">
      <Button label="Click Here" />
      <Button
        label="Click Here"
        type={buttonType.TERTIARY}
        size={buttonSize.SMALL}
      />
      <Button
        onClickHandler={() => {
          alert('hi');
        }}
        label="Click Here"
        type={buttonType.SECONDARY}
        size={buttonSize.SMALL}
      />
      <Button disabled />
    </div>
  );
}

export default App;
