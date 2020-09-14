import React from 'react'
import { Embed } from 'discord-components-react'
import 'discord-components-react/dist/index.css'

export default {
  title: 'Components/Embed',
  component: Embed
}

export const Default = () => (
  <Embed
    title='Title'
    description='Description'
    color='#7289DA'
    fields={[
      {
        inline: true,
        name: 'Name',
        value: 'Value'
      },
      {
        inline: true,
        name: 'NameNameNameNameName',
        value: 'Value'
      },
      {
        inline: true,
        name: 'Name',
        value: 'ValueValueValueValueValue'
      },
      {
        inline: true,
        name: 'Name',
        value: 'ValueValueValueValueValue'
      },
      {
        inline: true,
        name: 'Name',
        value: 'ValueValueValueValueValue'
      }
    ]}
    footer={{
      text: 'Footer'
    }}
    author={{
      text: 'Author',
      url: 'https://discord.com'
    }}
  />
)

export const Dark = () => (
  <div className='dark-theme'>
    <Embed
      title='Title'
      description='Description'
      color='#7289DA'
      fields={[
        {
          inline: true,
          name: 'Name',
          value: 'Value'
        },
        {
          inline: true,
          name: 'Name',
          value: 'Value'
        },
        {
          inline: true,
          name: 'Name',
          value: 'Value'
        },
        {
          inline: true,
          name: 'Name',
          value: 'ValueValueValueValueValue'
        },
        {
          inline: true,
          name: 'Name',
          value: 'ValueValueValueValueValue'
        }
      ]}
      footer={{
        text: 'Footer'
      }}
      author={{
        text: 'Author',
        url: 'https://discord.com'
      }}
    />
  </div>
)

Dark.parameters = {
  backgrounds: { default: 'dark' }
}
