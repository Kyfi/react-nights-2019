import React from 'react'

import { Button as ButtonBase } from './styled'

const Button = ({ children, type }) => (
  <ButtonBase type={type}>{children}</ButtonBase>
)

export default Button
