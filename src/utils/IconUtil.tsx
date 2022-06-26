import React from 'react'
import IconKids from '../assets/icons/iconHaveKids.svg'
import IconHeart from '../assets/icons/iconHeartBlack.svg'
import IconHeight from '../assets/icons/iconHeight.svg'
import IconPlaceholder from '../assets/icons/iconPlaceholder.svg'
import IconSmoke from '../assets/icons/iconSmoking.svg'
import IconPrayers from '../assets/icons/Prays.svg'
import IconReligion from '../assets/icons/Religion.svg'

const getTagIcon = (name: string) => {
  switch (name) {
    case 'IconHeart':
      return <IconHeart />

    case 'IconHeight':
      return <IconHeight />

    case 'IconSmoke':
      return <IconSmoke />

    case 'IconKids':
      return <IconKids />

    case 'IconPrayers':
      return <IconPrayers />

    case 'IconReligion':
      return <IconReligion />

    default:
      return <IconPlaceholder />
  }
}
export default getTagIcon
