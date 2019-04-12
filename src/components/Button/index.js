import React from 'react'

import { Button as ButtonBase } from './styled'

const Button = ({ children, type = 'button', onClick }) => (
  <ButtonBase type={type} onClick={onClick}>
    {children}
  </ButtonBase>
)

export { Button }
