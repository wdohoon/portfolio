import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/components/ContactForm';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser');

const mockedSend = emailjs.send as jest.MockedFunction<typeof emailjs.send>;

describe('ContactForm', () => {
  beforeEach(() => {
    mockedSend.mockReset();
  });

  it('shows validation error when fields are missing', async () => {
    render(<ContactForm />);
    const submit = screen.getByRole('button', { name: /send/i });

    await userEvent.click(submit);

    expect(screen.getByRole('alert')).toHaveTextContent('Please fill out all fields.');
  });

  it('shows success message when email is sent', async () => {
    mockedSend.mockResolvedValue({ text: 'OK' } as any);
    render(<ContactForm />);

    await userEvent.type(screen.getByPlaceholderText('Your Name'), 'John');
    await userEvent.type(screen.getByPlaceholderText('Your Email'), 'john@example.com');
    await userEvent.type(screen.getByPlaceholderText('Your Message'), 'Hi');

    await userEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Your email has been sent successfully!');
    expect(mockedSend).toHaveBeenCalled();
  });
});
