import React, { ComponentProps } from 'react'

type MessagesIconProps = ComponentProps<'svg'>

const MessagesIcon = ({ ...rest }: MessagesIconProps) => {
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" width="46" height="40" fill="none">
      <path
        fill="#FF8F26"
        stroke="#FF8F26"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.667 18.333a2.445 2.445 0 0 0 2.444 2.445h14.667l4.889 4.889V6.11a2.444 2.444 0 0 0-2.445-2.444h-17.11a2.444 2.444 0 0 0-2.445 2.444v12.222Z"
      />
      <path
        stroke="#FF8F26"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.667 29a2.444 2.444 0 0 1-2.445 2.445H8.556l-4.89 4.888V16.778a2.444 2.444 0 0 1 2.445-2.445h17.111a2.445 2.445 0 0 1 2.445 2.445V29Z"
      />
    </svg>
  )
}

export default MessagesIcon
