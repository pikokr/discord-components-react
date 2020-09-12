import React from 'react'
import { Embed } from 'discord-components-react'
import 'discord-components-react/dist/index.css'

export default {
  title: 'Components/Embed',
  component: Embed
}

export const Default = () => (
  <Embed
    title='존경'
    description='존경'
    color='#00ff00'
    fields={[
      {
        inline: true,
        name: '와샌즈',
        value: '와샌즈'
      },
      {
        inline: true,
        name: '와샌즈',
        value: '와샌즈'
      },
      {
        inline: true,
        name: '와샌즈',
        value: '와샌즈'
      },
      {
        inline: true,
        name: '와샌즈',
        value: '와샌즈'
      },
      {
        inline: true,
        name: '와샌즈',
        value: '와샌즈'
      }
    ]}
    footer={{
      text: '존경'
    }}
    author={{
      text: '존경'
    }}
  />
)

export const Dark = () => (
  <div className='dark-theme'>
    <Embed
      title='존경'
      description='존경'
      color='#00ff00'
      fields={[
        {
          inline: true,
          name: '와샌즈',
          value: '와샌즈'
        },
        {
          inline: true,
          name: '와샌즈',
          value: '와샌즈'
        },
        {
          inline: true,
          name: '와샌즈',
          value: '와샌즈'
        },
        {
          inline: true,
          name: '와샌즈',
          value: '와샌즈'
        },
        {
          inline: true,
          name: '와샌즈',
          value: '와샌즈'
        }
      ]}
      footer={{
        text: '존경'
      }}
      author={{
        text: '존경'
      }}
    />
  </div>
)
Dark.parameters = {
  backgrounds: { default: 'dark' }
}
