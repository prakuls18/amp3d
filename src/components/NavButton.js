import { TouchableOpacity, Image, ImageBackground } from "react-native-gesture-handler"

const NavButton = ({ type, path, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress}>
          <Image
              source={require(path)} 
              style={{width: 24.64, height: 28}} 
          />
      </TouchableOpacity>
  )
}

export default NavButton