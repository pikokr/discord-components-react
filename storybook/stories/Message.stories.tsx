import React from 'react'
import { Message } from 'discord-components-react'

export default {
  title: 'Components/Message'
}

export const Spoiler = () => <Message.Spoiler>테스트</Message.Spoiler>

// eslint-disable-next-line camelcase
export const Spoiler_Dark = () => (
  <div className='dark-theme'>
    <Message.Spoiler>테스트</Message.Spoiler>
  </div>
)

Spoiler_Dark.parameters = {
  backgrounds: { default: 'dark' }
}
