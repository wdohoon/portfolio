import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DarkModeToggle from '@/components/DarkModeToggle';

describe('DarkModeToggle', () => {
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
