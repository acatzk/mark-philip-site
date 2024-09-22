type IconSectionProps = {
  Icon: React.ElementType
  title: string
  subtitle: string
}

export const IconSection = ({ Icon, title, subtitle }: IconSectionProps): JSX.Element => (
  <div className="inline-flex items-center gap-2 md:gap-4">
    <div className="rounded-full bg-white p-3 md:p-4">
      <Icon className="h-6 w-6 text-core-primary md:h-7 md:w-7" />
    </div>
    <h3 className="text-sm font-bold md:text-base">
      {title} <br /> {subtitle}
    </h3>
  </div>
)
