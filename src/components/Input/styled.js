import styled from 'styled-components/macro'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.space[1]};
`

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 6px 10px;
  border: 1px solid lightgrey;
`

export const Label = styled.label`
  display: flex;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 3px;
`
