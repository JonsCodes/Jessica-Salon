import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the salon home page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /welcome to jessica's hair salon/i })
  ).toBeInTheDocument();
});
