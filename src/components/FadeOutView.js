import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native'

const FadeOutView = props => {
  const fadeAnim = useRef(new Animated.Value(1)).current

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 5000, /* milliseconds..? */
			useNativeDriver: true,
		}).start()
	}, [fadeAnim])

  return (
    <Animated.View
			style={{
				style,
				opacity: fadeAnim,
			}}>
				{props.children}
			</Animated.View>
  )
}

export default FadeOutView