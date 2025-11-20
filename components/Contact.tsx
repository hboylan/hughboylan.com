'use client'

import { motion, useInView } from 'framer-motion'
import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useRef } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'me@hughboylan.com',
    href: 'mailto:me@hughboylan.com',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '571-643-1328',
    href: 'tel:571-643-1328',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Birmingham, AL',
    href: null,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'hughboylan.com',
    href: 'https://hughboylan.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hugh-boylan',
    href: 'https://linkedin.com/in/hugh-boylan',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-center text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <a
              href="mailto:me@hughboylan.com"
              className="inline-block px-8 py-4 bg-linear-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              Send Me an Email
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-24 text-center text-slate-400 text-sm"
      >
        <p>© {new Date().getFullYear()} Hugh Boylan. All rights reserved.</p>
      </motion.div>
    </section>
  )
}
