import { Cable, CircuitBoard, LightbulbOff, LucideIcon } from 'lucide-react'

export const skillsAndServicesData: Skill[] = [
  {
    image: '/images/services/1.webp',
    type: 'electrician',
    title: 'Electrician Installation',
    description: 'Electrical installations for homes and businesses',
    icon: CircuitBoard
  },
  {
    image: '/images/services/2.webp',
    type: 'construction',
    title: 'Carpenters / Mason',
    description:
      'Construction professional building and repairing wood frameworks for lasting structures.',
    icon: Cable
  },
  {
    image: '/images/services/3.webp',
    type: 'haircut',
    title: 'Barber',
    description: 'Cutting and styling hair, handling transactions, and sterilizing tools',
    icon: LightbulbOff
  }
]

export type Skill = {
  image: string
  type: string
  title: string
  description: string
  icon: LucideIcon
}
