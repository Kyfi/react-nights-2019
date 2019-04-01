import styled from 'styled-components/macro'
import theme from '../../../../../common/theme'

export const Wrapper = styled.div``

export const ImgWrap = styled.div``

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Img = styled.img`
  max-height: 20rem;
  max-width: 100%;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 2.6rem;
  text-transform: uppercase;
  font-weight: bold;
`

export const Description = styled.div`
  color: ${theme.color.black};
  font-size: 1.3rem;
  margin-top: 2rem;
`
