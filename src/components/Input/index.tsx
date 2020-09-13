import React from 'react'
import styled from 'styled-components'
import { Color } from '../..'

const StyledInput = styled.input`
  font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 10px;
  height: 40px;
  background-color: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 3px;
  color: var(--input-color);
  -webkit-transition: border-color 0.2s ease-in-out;
  -moz-transition: border-color 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--${(props: any) => props.color || 'purple'});
  }
`

type InputProps = {
  color?: Color
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />
}

export default Input
