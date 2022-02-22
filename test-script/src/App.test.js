import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('click here button background color test', () => {
  render(<App />);
  const colorButton = screen.getByRole('button',{name:'Click Here'});
  expect(colorButton).toHaveStyle({backgroundColor:'yellow'});
  //click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'red'});
  expect(colorButton.textContent).toBe('Color Changed');
});
test('Initial Condition', () => {
  render(<App />)
  const clickButton=screen.getByRole('button',{name:'Click Here'});
  expect(clickButton).toBeEnabled();
  //checkbox
  const checkbox=screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

})
test('checkbox can enable-disable button', () => {
  render(<App />)
  const button=screen.getByRole('button');
  const checkbox=screen.getByRole('checkbox',{name : /disable button/i});
  //first click
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  //second click
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
})
test('if checkbox enable button will be gray', () => {
  render(<App />)
  const button=screen.getByRole('button');
  const checkbox=screen.getByRole('checkbox',{name : /disable button/i});
  //enable checkbox
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'gray'});
  //disable checkbox
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'yellow'});
})