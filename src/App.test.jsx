import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';

test('should render text from a header', async () => {
  render(<App />);

  const heading = screen.getByRole('heading', { name: /us holidays/i });
  expect(heading).toBeInTheDocument();

  expect(screen.getByText(/please/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/please/i));
});
