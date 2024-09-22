import { Check } from 'lucide-react'

export const FeatureItem = ({ feature }: { feature: string }): JSX.Element => (
  <div className="inline-flex items-center gap-3">
    <Check className="h-5 w-5 md:h-7 md:w-7" />
    <span className="font-light">{feature}</span>
  </div>
)
