import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { toKebabCase } from '../utils/case'

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
  <li className="bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-md border border-black/5 hover:shadow-2xl hover:-translate-y-1">
    <Link
      href={`/projects/${toKebabCase(name)}`}
      className="flex flex-col h-full"
    >
      <Image
        alt={name}
        src={imageUrl}
        width={600}
        height={400}
        className="bg-contain w-full"
      />
      <div className="p-4">
        <h4 className="text-2xl leading-snug my-2">{name}</h4>
        <h5 className="text-xl leading-normal text-[#bababa] m-0">{company}</h5>
        <p>{description}</p>
      </div>
    </Link>
  </li>
)
