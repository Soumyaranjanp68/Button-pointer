# Button Component

This project includes a reusable Button component that can be used to create two different buttons with different styles and onClick functions.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/button-component.git`
2. Navigate to the project directory: `cd button-component`
3. Install dependencies: `npm install`

## Usage

1. Import the Button component in your file:
```jsx
import Button from './Button';
<Button
  buttonText="Button 1"
  buttonStyle={{ color: 'white', background: 'red' }}
  onClick={() => alert('I am button 1 clicked')}
/>

<Button
  buttonText="Button 2"
  buttonStyle={{ color: 'white', background: 'blue' }}
  onClick={() => alert('I am button 2 clicked')}
/>
Button Props
The Button component accepts the following props:

buttonText: The text to be displayed on the button.
buttonStyle: An object representing the CSS styles for the button.
onClick: The function to be executed when the button is clicked.

