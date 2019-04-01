import React from 'react'

import { Wrapper, Label, Input } from './styled'

const InputField = ({ value, label, type = 'text' }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input value={value} type={type} />
  </Wrapper>
)

export default InputField
