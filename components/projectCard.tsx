import React from 'react'
import styles from './projectCard.module.css'
import { toKebabCase } from '../scripts/case'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export interface ProjectCardProps {
  company: string
  name: string
  description: string
  imageUrl: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  company,
  name,
  description,
  imageUrl,
}) => (
  <li className={styles.projectCard}>
    <Link href={`/projects/${toKebabCase(name)}`}>
      <a>
        <img alt={name} src={imageUrl} />
        <div className={styles.projectContent}>
          <h4 className={utilStyles.headingLg + ' ' + styles.headingProject}>
            {name}
          </h4>
          <h5 className={utilStyles.headingMd + ' ' + styles.headingCompany}>
            {company}
          </h5>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  </li>
)
