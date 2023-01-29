import React from 'react'
import style from './src/App.module.css'

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Button 
            title={text}
            style={style.btn}
        />
    </TouchableOpacity>
  )
}

export default Button