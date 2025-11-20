'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['Angular', 'React', 'React Native', 'jQuery', 'iOS', 'Webpack'],
    icon: '🎨',
  },
  {
    title: 'Frontend Design',
    skills: ['Bootstrap', 'Figma', 'Material Design', 'Tailwind CSS'],
    icon: '✨',
  },
  {
    title: 'Backend Development',
    skills: ['.NET', 'GraphQL', 'Go', 'Java', 'NodeJS'],
    icon: '⚙️',
  },
  {
    title: 'Backend Database',
    skills: [
      'DynamoDB',
      'MongoDB',
      'MySQL',
      'Postgres',
      'Redshift',
      'Snowflake',
    ],
    icon: '🗄️',
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP'],
    icon: '☁️',
  },
  {
    title: 'Cloud Development',
    skills: ['CloudFormation', 'Docker', 'Kubernetes', 'Terraform'],
    icon: '🚀',
  },
  {
    title: 'Cloud Services',
    skills: ['Apigee', 'Dialogflow', 'Elasticsearch', 'Firebase', 'Jira'],
    icon: '🔧',
  },
  {
    title: 'CI/CD',
    skills: ['Atlassian', 'AWS CodePipeline', 'CircleCI', 'GitLab', 'Jenkins'],
    icon: '🔄',
  },
  {
    title: 'Automated Testing',
    skills: [
      'Jest',
      'JUnit',
      'Karma',
      'Mocha',
      'Protractor',
      'React Testing Library',
      'Vitest',
    ],
    icon: '🧪',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/50 hover:bg-linear-to-r hover:from-primary-500/20 hover:to-accent-500/20 text-slate-300 hover:text-white text-sm rounded-full border border-slate-700 hover:border-primary-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <div className="flex items-center justify-center gap-3 text-lg text-slate-300">
              <span className="text-3xl">🎓</span>
              <div>
                <p className="font-semibold text-primary-400">
                  West Virginia University
                </p>
                <p>B.S. in Computer Science, December 2013</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
