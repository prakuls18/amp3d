import React from 'react'
import {Header} from 'react-native'
import Button from './NavButton'

import backArrow from './assets/backArrow.png'
import home from './assets/home.png'

const Header = ({text}) => {
  return (
    <Header
        leftComponent={<Button type='back' path={backArrow}/>}
        centerComponent={<h1>{text}</h1>}
        rightComponent={<Button type='home' path={home}/>}
    />
    )
}

export default Header
