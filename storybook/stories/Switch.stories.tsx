import React from 'react'
import { Checkbox } from 'discord-components-react'
import 'discord-components-react/dist/index.css'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Switch',
  component: Checkbox
}

export const Default = () => <Checkbox onChange={action('change')} />

export const Custom = () => (
  <>
    <Checkbox onChange={action('change')} color='purple' />
    <Checkbox onChange={action('change')} color='yellow' />
    <Checkbox onChange={action('change')} color='green' />
  </>
)
