import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('render the button', () => {
  render(<Button onClick={() => {}} disabled={false} />);

  expect(screen.getByText('Proceed')).toBeInTheDocument();
});
