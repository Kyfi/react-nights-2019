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
  max-width: 100%;

  @media (min-width: ${theme.breakPoint.xs}) {
    max-height: 20rem;
  }
`

export const TitleWrap = styled.div`
  overflow: hidden;

  @media (min-width: ${theme.breakPoint.sm}) {
    height: 6.7rem;
  }
`

export const Title = styled.h3`
  font-size: 2.6rem;
  text-transform: uppercase;
  font-weight: bold;
`

export const Description = styled.div`
  color: ${theme.color.black};
  font-size: 1.4rem;
  line-height: 1.56;
  margin-top: 2rem;
`
