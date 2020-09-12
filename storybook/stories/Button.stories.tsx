import React from 'react'
import { Button } from 'discord-components-react'
import 'discord-components-react/dist/index.css'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['purple', 'red', 'green', 'yellow']
      }
    }
  }
}

export const Default = (args: any) => (
  <Button onClick={action('click')} {...args}>
    Button
  </Button>
)

Default.args = {
  color: 'purple'
}
