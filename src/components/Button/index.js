import React from 'react'

import { Button as ButtonBase } from './styled'

const Button = ({ children, type = 'button', onClick, ...props }) => (
  <ButtonBase type={type} onClick={onClick} {...props}>
    {children}
  </ButtonBase>
)

export { Button }
