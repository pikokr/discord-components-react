import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  background: var(--${(props) => props.color});
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

  &:hover {
    background: var(--${(props) => props.color}-hover);
  }

  &:active {
    background: var(--${(props) => props.color}-active);
  }
`

type ButtonProps = {
  color?: 'purple' | 'green' | 'red' | 'yellow'
}

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ color, ...props }) => {
  return <StyledButton {...props} color={color || 'purple'} />
}

export default Button
