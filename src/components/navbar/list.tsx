import React, { ComponentProps } from 'react'

type ListProps = ComponentProps<'ul'>

const List = ({ ...rest }: ListProps): JSX.Element => {
  return (
    <ul {...rest}>
      <li>
        <a href="#" className="text-core-primary">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-core-primary">
          About
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-core-primary">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-core-primary">
          Experience
        </a>
      </li>
    </ul>
  )
}

export default List
