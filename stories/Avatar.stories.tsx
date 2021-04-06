import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar, AvatarProps, Empty } from '../src'

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
  body: 'chest',
  clothing: 'naked',
  clothingColor: 'red',
  graphic: 'none',
  faceMask: false,
  faceMaskColor: 'black',
  mask: false,
  circleColor: 'blue',
}

export const EmptyHead = () => (
  <div style={{ width: 400 }}>
    <Empty />
  </div>
)
