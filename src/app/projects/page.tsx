import projects from '@/../data/projects.json'
import ProjectCard from '@/components/ProjectCard'

interface ProjectList {
  slug: string
  name: string
  image: string
}

export default function ProjectsPage() {
  const items = projects as ProjectList[]
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-6">
      {items.map((p) => (
        <ProjectCard key={p.slug} slug={p.slug} name={p.name} image={p.image} />
      ))}
    </div>
  )
}
