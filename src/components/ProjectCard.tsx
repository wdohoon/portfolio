import Link from 'next/link'
import Image from 'next/image'

export interface ProjectCardProps {
  slug: string
  name: string
  image: string
}

export default function ProjectCard({ slug, name, image }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block transform transition hover:scale-105 shadow-lg rounded-2xl overflow-hidden"
    >
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
        placeholder="blur"
        blurDataURL={image}
      />
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="font-semibold text-lg">{name}</h3>
      </div>
    </Link>
  )
}
