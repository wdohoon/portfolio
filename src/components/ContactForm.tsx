"use client";

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDone(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      setLoading(false);
      return;
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        { from_name: name, reply_to: email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      console.log(result.text);
      setDone(true);
    } catch (err: any) {
      console.error(err.text);
      setError('Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      {done && <p className="text-green-500">Your email has been sent successfully!</p>}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        rows={5}
        required
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
