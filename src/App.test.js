// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FormPage component', () => {
  render(<App />);
  const formPageElement = screen.getByText(/Sample Form/i);
  expect(formPageElement).toBeInTheDocument();
});
