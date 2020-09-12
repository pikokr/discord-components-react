import React from 'react'
import { Input } from 'discord-components-react'
import 'discord-components-react/dist/index.css'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Controls/Input',
  component: Input
}

export const Default = (args: any) => (
  <Input onChange={action('change')} {...args} />
)

Default.args = {
  color: 'light'
}

export const Dark = (args: any) => (
  <div className='dark-theme'>
    <Input onChange={action('change')} {...args} />
  </div>
)

Dark.args = {
  color: 'dark'
}

Dark.parameters = {
  backgrounds: { default: 'dark' }
}
