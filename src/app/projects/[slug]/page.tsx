import { notFound } from 'next/navigation'
import projects from '@/../data/projects.json'
import Image from 'next/image'

interface Project {
  slug: string
  name: string
  description: string
  problem: string
  solution: string
  tech: string[]
  role: string
  demo: string | null
  code: string | null
  image: string
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = (projects as Project[]).find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <div className="max-w-prose mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={450}
        className="w-full rounded-2xl mb-6"
        placeholder="blur"
        blurDataURL={project.image}
      />
      <p className="mb-4">{project.description}</p>
      <h2 className="text-xl font-semibold mb-2">Problem</h2>
      <p className="mb-4">{project.problem}</p>
      <h2 className="text-xl font-semibold mb-2">Solution</h2>
      <p className="mb-4">{project.solution}</p>
      <h2 className="text-xl font-semibold mb-2">Tech</h2>
      <ul className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {t}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">My Role</h2>
      <p className="mb-4">{project.role}</p>
      <div className="space-x-4">
        {project.demo && (
          <a
            className="underline text-primary"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        {project.code && (
          <a
            className="underline text-primary"
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </div>
  )
}
