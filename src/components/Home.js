import { View } from "react-native"
import style from '../App.module.css'

const Home = () => {
  return (
    <View style={style.container}>
        <View style={style.header}>
            <Text>Welcome!</Text>
        </View>
        <View style={style.homeBody}>
            <Text style={style.company}>AMP3D</Text>
            <Text style={style.catchphrase}>
                Amplifying your travel (TBD)
            </Text>
        </View>
        <View style={style.footer}>
            <Button/>
            <Button/>
            <Button/>
        </View>
    </View>
  )
}

export default Home