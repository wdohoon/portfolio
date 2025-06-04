import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DarkModeToggle from '@/components/DarkModeToggle';

describe('DarkModeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('uses saved theme on initial render', async () => {
    localStorage.setItem('theme', 'dark');
    render(<DarkModeToggle />);

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });
  });

  it('toggles dark class on html element', async () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // initially should not have dark class
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    await userEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await userEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
