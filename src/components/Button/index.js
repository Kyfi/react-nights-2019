import React from 'react'

import { Button as ButtonBase } from './styled'

const Button = ({ children, type = 'button' }) => (
  <ButtonBase type={type}>{children}</ButtonBase>
)

export { Button }
