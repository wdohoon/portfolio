import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header';

describe('Header mobile menu', () => {
  it('toggles menu open and close via button', async () => {
    render(<Header />);
    const button = screen.getByRole('button');

    // initially only desktop links should be present
    expect(screen.getAllByText(/about/i)).toHaveLength(1);

    await userEvent.click(button);
    expect(screen.getAllByText(/about/i)).toHaveLength(2);

    await userEvent.click(button);
    expect(screen.getAllByText(/about/i)).toHaveLength(1);
  });

  it('closes menu when a mobile link is clicked', async () => {
    render(<Header />);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    const links = screen.getAllByText(/about/i);
    expect(links).toHaveLength(2);

    await userEvent.click(links[1]);
    expect(screen.getAllByText(/about/i)).toHaveLength(1);
  });
});
