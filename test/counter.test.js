import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';
import Display from './Display';

describe('Counter Component', () => {
  // Test Case 1: Counter Default Value must be 0
  test('renders the initial count value as 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    expect(countValue).toHaveTextContent('0');
  });

  // Test Case 2: Increment works when button clicked
  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByText('Increment');

    fireEvent.click(incrementButton);

    expect(countValue).toHaveTextContent('1');
  });

  // Test Case 3: Decrement works when button clicked
  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(decrementButton);

    expect(countValue).toHaveTextContent('-1');
  });

  // Test Case 4: Display has correct value
  test('Display renders the correct value passed as props', () => {
    render(<Display value={5} />);
    const countValue = screen.getByTestId('count-value');
    expect(countValue).toHaveTextContent('5');
  });
});
