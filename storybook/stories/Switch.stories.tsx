import React from 'react'
import { Checkbox } from 'discord-components-react'
import 'discord-components-react/dist/index.css'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

export default {
  title: 'Controls/Switch',
  component: Checkbox
}

const SwitchSpacer = styled.div`
  div + div {
    margin-left: 10px;
  }
  div {
    display: inline-block;
  }
`

export const Default = () => <Checkbox onChange={action('change')} />

export const Custom = () => (
  <SwitchSpacer>
    <div>
      <Checkbox onChange={action('change')} color='purple' defaultChecked />
    </div>
    <div>
      <Checkbox onChange={action('change')} color='yellow' defaultChecked />
    </div>
    <div>
      <Checkbox onChange={action('change')} color='green' defaultChecked />
    </div>
    <div>
      <Checkbox onChange={action('change')} color='red' defaultChecked />
    </div>
  </SwitchSpacer>
)
