import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '../src'

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<AvatarProps> = args => (
  <div style={{ width: 400 }}>
    <Avatar {...args} />
  </div>
)

Default.args = {
  // skinTone: 'light',
  // eyes: 'normal',
  // eyebrows: 'raised',
  // mouth: 'lips',
  // hair: 'short',
  // facialHair: 'none',
  // accessory: 'none',
  // hat: 'none',
  // hairColor: 'black',
  // lipColor: 'red',
  // hatColor: 'green',
  // lashes: false,

  body: 'chest',
  clothing: 'naked',
  clothingColor: 'red',
  graphic: 'none',
  faceMask: false,
  faceMaskColor: 'black',
  mask: false,
  circleColor: 'blue',
}
