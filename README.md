# Portfolio

This project is a personal portfolio site built with **Next.js** and **TypeScript**. It showcases projects and skills with smooth animations and a 3D hero section.

## Features

- Animated 3D elements using **three.js** via `@react-three/fiber`
- Page transitions and interactive effects powered by **framer-motion**
- Responsive design styled with **Tailwind CSS**
- Dark mode toggle and custom cursor
- Contact form that sends emails through EmailJS

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [framer-motion](https://www.framer.com/motion/)
- [three.js](https://threejs.org/) with React Three Fiber

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the project root and define the following values used by the contact form:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

Generate a production build with:

```bash
npm run build
```

You can then run `npm start` or deploy the `.next` output to services such as **Vercel**.
