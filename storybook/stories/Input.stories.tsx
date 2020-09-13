import React from 'react'
import { Input } from 'discord-components-react'
import 'discord-components-react/dist/index.css'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

export default {
  title: 'Controls/Input',
  component: Input
}

export const Default = (args: any) => (
  <Input onChange={action('change')} {...args} />
)

const Spacer = styled.div`
  input + input {
    margin-left: 10px;
  }
`

// eslint-disable-next-line camelcase
export const Custom_Color = (args: any) => (
  <Spacer>
    <Input onChange={action('change')} {...args} />
    <Input onChange={action('change')} {...args} color='red' />
    <Input onChange={action('change')} {...args} color='yellow' />
    <Input onChange={action('change')} {...args} color='green' />
  </Spacer>
)

export const Dark = (args: any) => (
  <div className='dark-theme'>
    <Input onChange={action('change')} {...args} />
  </div>
)

// eslint-disable-next-line camelcase
export const Dark_Custom_Color = (args: any) => (
  <div className='dark-theme'>
    <Spacer>
      <Input onChange={action('change')} {...args} />
      <Input onChange={action('change')} {...args} color='red' />
      <Input onChange={action('change')} {...args} color='yellow' />
      <Input onChange={action('change')} {...args} color='green' />
    </Spacer>
  </div>
)

Dark.parameters = {
  backgrounds: { default: 'dark' }
}

Dark_Custom_Color.parameters = {
  backgrounds: { default: 'dark' }
}
