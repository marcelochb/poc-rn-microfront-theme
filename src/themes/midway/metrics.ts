import { IMetricsTheme } from '@poc/interfaces';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics:IMetricsTheme = {
  smallest: 3,
  small: 5,
  base: 10,
  large: 20,
  largest: 40,
  inputHeight: '30%',
  inputWidth: '40%',
  buttonHeight: 60,
  buttonWidth: '100%',
  buttonHeightSmall: '15%',
  buttonWidthSmall: '20%',
  radiusBase: 8,
  radiusLarge: 20,
  radiusLargest: 50,
  radiusRounded: 50,
  borderWidthBase: 0.6,
  borderWidthSmall: 0.3,
  borderWidthLarger: 1,
  screenWidth: width,
  screenHeight: height,
  avatarSize: 70,
}
