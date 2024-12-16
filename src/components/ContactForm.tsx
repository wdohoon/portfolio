'use client'

import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setDone(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
      setError('Please fill out all fields.')
      setLoading(false)
      return
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        { from_name: name, reply_to: email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )

      console.log(result.text)
      setDone(true)
    } catch (err: unknown) {
      // err가 Error 인스턴스인지 체크
      if (err instanceof Error) {
        console.error(err.message)
      } else {
        console.error('An unknown error occurred:', err)
      }
      setError('Failed to send email. Please try again later.')
    } finally {
      setLoading(false)
      form.reset()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">메시지를 보내주시면 곧 연락드리겠습니다.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {done && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">Your email has been sent successfully!</span>
            </div>
          )}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}
