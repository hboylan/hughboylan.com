import { toKebabCase } from '../../../utils/case'
import { projects } from '../../page'

export function generateStaticParams() {
  return projects.map(({ name }) => ({
    id: toKebabCase(name),
  }))
}

export default async function Project({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(({ name }) => toKebabCase(name) === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full max-w-2xl block mx-auto mb-8 rounded-xl shadow-md"
      />
      <h2 className="text-2xl leading-snug my-2">
        {project.name}
      </h2>
      <h3 className="text-xl leading-normal text-[#bababa]">
        {project.company}
      </h3>
      <p>{project.description}</p>
    </>
  )
}
