import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Compendium from './Compendium';

test('our compendium renders an initial loading state', async () => {
  render(<Compendium />);

  expect(screen.getByText(/please/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/please/i));
});
