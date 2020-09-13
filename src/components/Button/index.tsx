import React from 'react'
import styled, { css } from 'styled-components'
import { Color } from '../../types/Color'

const StyledButton: any = styled.button`
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  outline: none;
  border: none;
  padding: 7px 16px;
  text-align: center;
  transition: background-color 0.2s ease-in-out;

  ${(props: any) => {
    switch (props.variant) {
      case 'default':
        return css`
          background: var(--${props.color});
          &:hover {
            background: var(--${props.color}-hover);
          }

          &:active {
            background: var(--${props.color}-active);
          }
        `
      case 'outlined':
        return css`
          background: transparent;
          border: 1px solid var(--${props.color});
          color: var(--${props.color});

          &:active {
            background: var(--${props.color}-outline-active);
          }
        `
      default:
        return ''
    }
  }}
`

type ButtonProps = {
  color?: Color
  variant?: 'default' | 'outlined'
}

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ color, variant, ...props }) => {
  return (
    <StyledButton
      {...props}
      color={color || 'purple'}
      variant={variant || 'default'}
    />
  )
}

export default Button
