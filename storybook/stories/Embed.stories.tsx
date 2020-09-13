import React from 'react'
import { Embed } from 'discord-components-react'
import 'discord-components-react/dist/index.css'

export default {
  title: 'Components/Embed',
  component: Embed
}

export const Default = () => (
  <Embed
    title='제목'
    description='내용'
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
        value: '존경'
      },
      {
        inline: true,
        name: '와샌즈',
        value: '와샌즈asdfasdfasdfasdfsadfasdf'
      }
    ]}
    footer={{
      text: '푸터'
    }}
    author={{
      text: '샌즈',
      url: 'https://discord.com'
    }}
  />
)

export const Dark = () => (
  <div className='dark-theme'>
    <Embed
      title='제목'
      description='내용'
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
          value: '존경'
        },
        {
          inline: true,
          name: '와샌즈',
          value: '와샌즈asdfasdfasdfasdfsadfasdf'
        }
      ]}
      footer={{
        text: '푸터'
      }}
      author={{
        text: '샌즈',
        url: 'https://discord.com'
      }}
    />
  </div>
)

Dark.parameters = {
  backgrounds: { default: 'dark' }
}
