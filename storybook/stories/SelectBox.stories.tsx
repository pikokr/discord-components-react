import React from 'react'
import { SelectBox } from 'discord-components-react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Controls/SelectBox'
}

export const Default = () => {
  const a = action('change')

  return (
    <SelectBox
      items={[
        {
          title: 'Keep me safe',
          description: 'Scan direct messages from everyone.',
          value: 'sel1',
          color: 'green',
          default: true
        },
        {
          title: 'My friends are nice',
          description:
            'Scan direct messages from everyone unless they are a friend.',
          value: 'sel2',
          color: 'yellow'
        },
        {
          title: 'Do not scan',
          description:
            'Direct messages will not be scanned for explicit content.',
          value: 'sel3',
          color: 'red'
        },
        {
          title: 'Purple',
          value: 'purple',
          color: 'purple'
        }
      ]}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => a(e.target.value)}
    />
  )
}

export const Dark = () => {
  const a = action('change')

  return (
    <div className='dark-theme'>
      <SelectBox
        items={[
          {
            title: 'Keep me safe',
            description: 'Scan direct messages from everyone.',
            value: 'sel1',
            color: 'green',
            default: true
          },
          {
            title: 'My friends are nice',
            description:
              'Scan direct messages from everyone unless they are a friend.',
            value: 'sel2',
            color: 'yellow'
          },
          {
            title: 'Do not scan',
            description:
              'Direct messages will not be scanned for explicit content.',
            value: 'sel3',
            color: 'red'
          },
          {
            title: 'Purple',
            value: 'purple',
            color: 'purple'
          }
        ]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => a(e.target.value)}
      />
    </div>
  )
}

Dark.parameters = {
  backgrounds: { default: 'dark' }
}
