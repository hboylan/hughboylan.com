import { ProjectCard, ProjectCardProps } from '../components/projectCard'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export const projects: ProjectCardProps[] = [
  {
    company: 'Shipt',
    name: 'Partnershipt',
    description:
      'B2B app for Shipt partners to manage orders and internal users.',
    imageUrl: '/images/shipt.jpg',
  },
  {
    company: 'Shipt',
    name: 'Admin App',
    description:
      'Internal admin app built using custom component library and micro-frontent framework.',
    imageUrl: '/images/shipt.jpg',
  },
  {
    company: 'IBM',
    name: 'National Archives ERA',
    description:
      "Electronic Records Archives for NARA's next-gen cloud platform built cloud-first using AWS and AngularJS.",
    imageUrl: '/images/era-thumb.jpeg',
  },
  {
    company: 'Runway Games',
    name: 'Solar Roller',
    description:
      '3D mobile game where players tilt and shake their phone to navigate a rolling avatar through various obstacles across progressively more difficult levels.',
    imageUrl: '/images/sol-thumb.jpeg',
  },
  {
    company: 'ISM Services',
    name: 'Myo Apple Connector',
    description:
      'Experimented with wearable, gesture device as game controller.',
    imageUrl: '/images/myo-thumb.jpeg',
  },
  {
    company: 'WVU',
    name: 'Solar Decathlon',
    description:
      "Developed custom smart home app to control various in-home devices for WVU's first solar house.",
    imageUrl: '/images/peak-thumb.jpeg',
  },
]

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd + ' ' + styles.sectionContainer}>
        <p className={styles.intro}>
          Hi, I'm a software engineer with 10+ years of experience working on
          unique and interesting apps.
        </p>
      </section>

      <div className={styles.sectionContainer}>
        <section className={utilStyles.headingMd}>
          <ul className={utilStyles.list + ' ' + styles.projects}>
            {projects.map(project => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
