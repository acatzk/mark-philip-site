import React from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

const RequestServiceForm = (): JSX.Element => {
  return (
    <form className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:justify-start md:px-24 lg:gap-14 lg:px-48">
      <h2 className="max-w-[120px] text-sm font-semibold uppercase text-core-secondary">
        Request a service today
      </h2>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <Input placeholder="YOUR NAME" />
        <Input placeholder="YOUR EMAIL" />
        <Input placeholder="PHONE NUMBER" />
        <Button className="rounded-none py-5 uppercase">Get Service</Button>
      </div>
    </form>
  )
}

export default RequestServiceForm
