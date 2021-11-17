import { Button } from '.';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('renders accurate text', () => {
    const handleClick = jest.fn();
    render(<Button text="Hello" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Hello/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Hello" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Hello/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
