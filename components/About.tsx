'use client'

import { motion, useInView } from 'framer-motion'
import { Award, Briefcase, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="aspect-square rounded-xl mb-6 relative overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Hugh Boylan"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Briefcase className="w-5 h-5 text-primary-400" />
                      <span>Principal Software Engineer at Shipt</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-primary-400" />
                      <span>Birmingham, AL</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Award className="w-5 h-5 text-primary-400" />
                      <span>15+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                Full-Stack application developer and cloud architect with more
                than{' '}
                <span className="text-primary-400 font-semibold">
                  15 years of experience
                </span>{' '}
                delivering quality web and mobile solutions to clients ranging
                from startup to enterprise and government.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Solid understanding of software tools, API integration and
                modern web development practices. Highly motivated, goal driven
                and passionate for delivering robust software solutions to every
                client.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently employed at{' '}
                <span className="text-accent-400 font-semibold">Shipt</span>{' '}
                since May 2019, where I coordinate with internal teams to
                develop admin applications, create micro-frontend tools, and
                design data pipeline workers.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">
                      AWS Solutions Architect – Associate
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">
                      GCP Professional Cloud Architect
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">
                      AWS Developer - Associate
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
