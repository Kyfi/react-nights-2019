import React from 'react'

import { Wrapper, Label, Input } from './styled'

const InputField = ({ id, value, label, type = 'text' }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} value={value} type={type} />
  </Wrapper>
)

export default InputField
