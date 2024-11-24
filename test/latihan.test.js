import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Latihan Test Cases', () => {
  // Test Case 1: Counter Default Value must be 0
  test('Counter default value is 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  // Test Case 2: Increment works when button clicked
  test('Increment button increments counter value', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  // Test Case 3: Decrement works when button clicked
  test('Decrement button decrements counter value', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  // Test Case 4: Reset the count using reset button
  test('Reset button resets counter value to 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');

    // Increment the counter
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');

    // Reset the counter
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });

  // Test Case 5: Greeting component displays user's name
  test('Greeting component displays "Hello, Nandiya"', () => {
    render(<Greeting name="Nandiya" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Nandiya');
  });

  // Test Case 6: Greeting component displays lecturer's name
  test('Greeting component displays "Hello, Pak Farid"', () => {
    render(<Greeting name="Pak Farid" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Pak Farid');
  });

  // Test Case 7: Triggers alert with correct message when clicked
  test('Alert button triggers alert with correct message', () => {
    // Mock alert function
    window.alert = jest.fn();

    render(<AlertButton message="This is a test alert!" />);
    const alertButton = screen.getByTestId('alert-button');

    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith('This is a test alert!');
  });
});