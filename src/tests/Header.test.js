import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('renders the header with correct text', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Task Manager');
  });
});

