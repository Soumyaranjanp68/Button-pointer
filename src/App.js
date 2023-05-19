import React from 'react';
import Button from "./Component/Button" ;
import './App.css';

const App = () => {
  const button1Style = {
    color: 'white',
    background: 'red',
  };

  const button2Style = {
    color: 'white',
    background: 'blue',
  };

  const handleClickButton1 = () => {
    alert('I am button 1 clicked');
  };

  const handleClickButton2 = () => {
    alert('I am button 2 clicked');
  };

  return (
    <div className="container" >
       <div className="box">

      <Button
        buttonText="Button 1"
        buttonStyle={button1Style}
        onClick={handleClickButton1}
        />
      <Button
        buttonText="Button 2"
        buttonStyle={button2Style}
        onClick={handleClickButton2}
        />
        </div>
    </div>
  );
};

export default App;
