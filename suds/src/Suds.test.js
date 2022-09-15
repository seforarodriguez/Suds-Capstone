import { render, screen } from '@testing-library/react';
import Suds from './Suds';

test('renders learn react link', () => {
  render(<Suds />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
