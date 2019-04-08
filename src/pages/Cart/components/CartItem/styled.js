import styled from 'styled-components'

export const CartImgWrap = styled.div``

export const CartImg = styled.img``

export const CartItem = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  padding: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
`

export const CartItemName = styled.div`
  display: flex;
  flex: auto;
  margin-left: 10px;
`

export const CartItemQuantity = styled.div`
  display: flex;
  margin: 0 10px;
`

export const CartItemButton = styled.div`
  display: flex;
`
