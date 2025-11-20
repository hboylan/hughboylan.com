'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Shipt',
    role: 'Senior Software Engineer',
    period: 'May 2019 - Present',
    location: 'Birmingham, AL',
    highlights: [
      'Coordinate with many internal teams to develop internal admin application',
      'Develop micro-frontend tools to support development of admin app across many teams',
      'Develop GraphQL application to aggregate data from microservices',
      'Design and develop data pipeline workers to ingest large volumes of product data',
    ],
    color: 'from-primary-500 to-primary-600',
  },
  {
    company: 'Sogeti USA',
    role: 'Consultant (Cloud Architect & Full-Stack Developer)',
    period: 'October 2017 - May 2019',
    location: 'Multiple Clients',
    highlights: [
      'Designed and documented architecture for client file intake and processing',
      'Developed chatbot UI in React and API in NodeJS for T. Rowe Price',
      'Integrated with DynamoDB, Google Dialogflow and internal APIs',
      'Designed enhanced architecture for big data pipeline in AWS for Barrick Gold',
    ],
    color: 'from-accent-500 to-accent-600',
  },
  {
    company: 'IBM',
    role: 'Full-Stack Developer',
    period: 'June 2015 - May 2017',
    location: 'Washington, DC',
    highlights: [
      "Led development for National Archives' cloud migration for Electronic Records Archives",
      'Developed API in Java Spring, deployed with ECS and connected to Postgres',
      'Developed responsive Angular UI for archivists to upload files, edit metadata and search',
      'Trained groups of new hires every quarter using real-world projects and technologies',
    ],
    color: 'from-primary-500 to-accent-500',
  },
  {
    company: 'ISM Corporation',
    role: 'App Developer',
    period: 'March 2014 - February 2015',
    location: 'Remote',
    highlights: [
      'Prototyped 3D visualization service with Oculus Rift, Xbox controller, Unity3D',
      'Developed plugin to browse Apple Maps with Myo gesture control armband',
      'Developed 2 mobile games with Unity3D',
    ],
    color: 'from-accent-500 to-primary-500',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          opacity,
        }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto mb-16"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary-400 group-hover:to-accent-400 transition-all duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-primary-300 font-semibold">
                      {exp.role}
                    </p>
                  </div>
                  <div
                    className={`px-4 py-2 bg-linear-to-r ${exp.color} rounded-lg text-white font-semibold text-sm whitespace-nowrap`}
                  >
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
