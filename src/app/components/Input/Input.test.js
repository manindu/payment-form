import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

test('render the input field', () => {
  render(
    <Input
      id="name"
      label="Name"
      placeholder="Name"
      onChange={() => {}}
      onBlur={() => {}}
      value="John"
    />
  );

  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
});
