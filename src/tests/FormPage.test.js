import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormPage from '../components/FormPage';

test('Form submits with correct values', async () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<FormPage onSubmit={handleSubmit} />);
  
    const nameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const messageInput = getByLabelText('Message:');
    const submitButton = getByText('Submit');
  
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
  
    fireEvent.click(submitButton);
  
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message'
      });
    });
  });
