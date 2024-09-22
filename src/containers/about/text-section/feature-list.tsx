import { FeatureItem } from './feature-item'

export const FeatureList = (): JSX.Element => {
  const features = [
    'Emergency Power Solution',
    'Wiring and Installation Upgrade',
    'Full-service electrical design'
  ]

  return (
    <div className="mt-8 flex flex-col space-y-4 text-xs text-white md:mt-14 md:text-sm">
      {features.map((feature) => (
        <FeatureItem key={feature} feature={feature} />
      ))}
    </div>
  )
}
