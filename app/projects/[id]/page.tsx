import cardStyles from '../../../components/projectCard.module.css'
import { toKebabCase } from '../../../scripts/case'
import utilStyles from '../../../styles/utils.module.css'
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
        style={{
          width: '100%',
          maxWidth: '600px',
          display: 'block',
          margin: '0 auto 2rem',
          borderRadius: '0.75rem',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      />
      <h2 className={`${utilStyles.headingLg} ${cardStyles.headingProject}`}>
        {project.name}
      </h2>
      <h3 className={`${utilStyles.headingMd} ${cardStyles.headingCompany}`}>
        {project.company}
      </h3>
      <p>{project.description}</p>
    </>
  )
}
