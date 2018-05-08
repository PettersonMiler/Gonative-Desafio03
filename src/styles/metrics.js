import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  baseRadius: 5,
  heightButton: 42,
  fontTittle: 18,
  baseBorderWidth: 1,
  marginTopButton: 10,
  marginRightButton: 15,
  avatar: 32,
  borderAvatar: 16,
  borderAvatarWidth: 5,
  marginTextError: 10,

};
