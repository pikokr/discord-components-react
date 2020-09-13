import React from 'react'
import { Button } from 'discord-components-react'
import 'discord-components-react/dist/index.css'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

export default {
  title: 'Components/Button',
  component: Button
}

const ButtonSpacer = styled.div`
  button + button {
    margin-left: 10px;
  }
`

export const Default = () => {
  return (
    <ButtonSpacer>
      <Button onClick={action('click')}>Button</Button>
      <Button onClick={action('click')} color='green'>
        Button
      </Button>
      <Button onClick={action('click')} color='yellow'>
        Button
      </Button>
      <Button onClick={action('click')} color='red'>
        Button
      </Button>
    </ButtonSpacer>
  )
}

export const Outlined = () => {
  return (
    <ButtonSpacer>
      <Button variant='outlined' onClick={action('click')}>
        Button
      </Button>
      <Button variant='outlined' onClick={action('click')} color='green'>
        Button
      </Button>
      <Button variant='outlined' onClick={action('click')} color='yellow'>
        Button
      </Button>
      <Button variant='outlined' onClick={action('click')} color='red'>
        Button
      </Button>
    </ButtonSpacer>
  )
}
