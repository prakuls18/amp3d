import React from 'react'
import logo from '../assets/images/logo_whiteBG.png'

function Loader() {
  return (
    <FadeOutView style={style.loadBackground}>
        <Image 
            source={{logo}} 
            style={{width: 590, height: 478}}
        />
    </FadeOutView>
  )
}

export default Loader