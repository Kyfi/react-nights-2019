import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../../../common/theme'

export const Wrapper = styled.li`
  padding: 0.5rem;
  width: 100%;

  @media (min-width: ${theme.breakPoint.xs}) {
    width: calc(100% / 2);
  }

  @media (min-width: ${theme.breakPoint.sm}) {
    width: calc(100% / 3);
  }

  @media (min-width: ${theme.breakPoint.md}) {
    width: calc(100% / 4);
  }

  @media (min-width: ${theme.breakPoint.lg}) {
    width: calc(100% / 6);
  }
`

export const ImgWrap = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: initial;
`

export const Inner = styled.div`
  background: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: ${theme.shadow.basic};
  transition: box-shadow 1s;

  &:hover {
    box-shadow: ${theme.shadow.secondary};
    position: relative;
    z-index: 1;

    img {
      transform: scale(1.1);
    }
  }
`

export const Img = styled.img`
  max-height: 15rem;
  max-width: 100%;
  transform: scale(1);
  will-change: transform;
  transition: transform 1s;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
`
