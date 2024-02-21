import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskForm from '../TaskForm';

describe('TaskForm component', () => {
  test('submits form with valid data', () => {
    const addTaskMock = jest.fn();
    render(<TaskForm addTask={addTaskMock} />);

    // Fill form fields
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });

    // Submit form
    fireEvent.submit(screen.getByRole('button', { name: 'Add Task' }));

    // Ensure addTask is called with the correct data
    expect(addTaskMock).toHaveBeenCalledWith({ title: 'Test Title', description: 'Test Description' });
  });

  test('displays error messages for empty fields', () => {
    const addTaskMock = jest.fn();
    render(<TaskForm addTask={addTaskMock} />);

    // Submit form without filling any fields
    fireEvent.submit(screen.getByRole('button', { name: 'Add Task' }));

    expect(screen.getByText('Title should not be empty')).toBeInTheDocument();
    expect(screen.getByText('Description should not be empty')).toBeInTheDocument();

    // Ensure that addTask is not called
    expect(addTaskMock).not.toHaveBeenCalled();
  });
});