import type React from 'react'
import Layout from '../../components/layout'
import type { ProjectCardProps } from '../../components/projectCard'
import cardStyles from '../../components/projectCard.module.css'
import { toKebabCase } from '../../scripts/case'
import utilStyles from '../../styles/utils.module.css'
import { projects } from '../index'

interface ProjectProps {
  project: ProjectCardProps
}

export const Project: React.FC<ProjectProps> = ({ project }) => (
  <Layout>
    <h2 className={`${utilStyles.headingLg} ${cardStyles.headingProject}`}>
      {project.name}
    </h2>
    <h3 className={`${utilStyles.headingMd} ${cardStyles.headingCompany}`}>
      {project.company}
    </h3>
    <p>{project.description}</p>
  </Layout>
)

export function getStaticPaths() {
  const paths = projects.map(({ name }) => ({
    params: {
      id: toKebabCase(name),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const project = projects.find(({ name }) => toKebabCase(name) === params.id)

  return {
    props: {
      project,
    },
  }
}

export default Project
