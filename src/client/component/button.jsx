// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) => (
  <button onClick={handleClick} type="button">
    {label}
  </button>
)

export default Button
