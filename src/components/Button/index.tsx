import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  background: var(--purple);
  color: #fff;
  border-radius: 3px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  outline: none;
  padding: 7px 16px;
  text-align: center;
`

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return <StyledButton {...props} />
}

export default Button
