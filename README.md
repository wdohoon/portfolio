# Portfolio

A personal portfolio built with **Next.js 14** and **Tailwind CSS**. It showcases selected projects and skills on a single scroll page.

## Project Structure

```
src/
  app/          # Next.js App Router pages
  components/   # Reusable React components
  data/         # JSON data for projects
```

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Deployment

This project is deployed to Netlify via GitHub Actions. Pushes to `main` trigger `next build` and `next export` and the result is published automatically.

## License

[MIT](LICENSE)
