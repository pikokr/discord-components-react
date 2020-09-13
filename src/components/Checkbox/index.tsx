/* import React from 'react'
import styled, { css } from 'styled-components'

const CheckContainer: any = styled.div`
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15);
  background-color: ${(props: any) => (props.checked ? '#7289da' : '#72767d')};
  border-radius: 14px;
  width: 42px;
  height: 24px;
  opacity: 1;
  overflow: hidden;
  position: relative;
  display: block;
  transition: background 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    border 0.15s ease-in-out, opacity 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
  }
  &::after {
    -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
    left: 0;
    pointer-events: none;
    transition: transform 0.15s ease-in-out, width 0.1s ease-in-out,
      left 0.1s ease-in-out, -webkit-transform 0.15s ease-in-out;
    border-radius: 9px;
    height: 18px;
    width: 18px;
    margin: 3px;
    content: '';
    display: block;
    position: absolute;
    background-color: #fff;
  }
  &:active::before {
    opacity: 0.1;
  }
  &:active::after {
    width: 26px;
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    background-color: #f6f6f7;
  }
  ${(props: any) =>
    props.checked &&
    css`
      &::after {
        -webkit-transform: translate3d(18px, 0, 0);
        -moz-transform: translate3d(18px, 0, 0);
        transform: translate3d(18px, 0, 0);
      }

      &:active::after {
        width: 26px;
        left: -8px;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      }
    `}
`

const Check: any = styled.input.attrs({
  type: 'checkbox'
})`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
`

type CheckboxProps = {
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps
> = ({ checked, onChange, ...props }) => {
  const [defaultChecked, setDefaultChecked] = React.useState(checked || false)

  return (
    <CheckContainer checked={checked || defaultChecked}>
      <Check
        checked={checked || defaultChecked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange ? onChange(event) : setDefaultChecked(!defaultChecked)
        }
        {...props}
      />
    </CheckContainer>
  )
}

export default Checkbox
*/

import React from 'react'
import styled from 'styled-components'
import { Color } from '../..'

const Switch: any = styled.span`
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  width: 42px;
  height: 24px;
  opacity: 1;
  overflow: hidden;
  position: relative;
  display: block;
  transition: background 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    border 0.15s ease-in-out, opacity 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
  }
  &::after {
    -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
    left: 0;
    pointer-events: none;
    transition: transform 0.15s ease-in-out, width 0.1s ease-in-out,
      left 0.1s ease-in-out, -webkit-transform 0.15s ease-in-out;
    border-radius: 9px;
    height: 18px;
    width: 18px;
    margin: 3px;
    content: '';
    display: block;
    position: absolute;
    background-color: #fff;
  }
  &:active::before {
    opacity: 0.1;
  }
  &:active::after {
    width: 26px;
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    background-color: #f6f6f7;
  }
`

const Check: any = styled.input.attrs({
  type: 'checkbox'
})`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
`

const SwitchContainer = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;

  input:checked + span::after {
    -webkit-transform: translate3d(18px, 0, 0);
    -moz-transform: translate3d(18px, 0, 0);
    transform: translate3d(18px, 0, 0);
  }

  input:checked + span:active::after {
    width: 26px;
    left: -8px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  input + span {
    background-color: #72767d;
  }
  input:checked + span {
    background: ${(props: any) => `var(--${props.color})`};
  }
`

type CheckboxProps = {
  color?: Color
}

const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps
> = ({ color, ...props }) => {
  return (
    <SwitchContainer color={color || 'purple'}>
      <Check {...props} />
      <Switch />
    </SwitchContainer>
  )
}

export default Checkbox
