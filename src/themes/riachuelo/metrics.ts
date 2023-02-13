import { ModelOfMetricsTheme } from '@src/model';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics:ModelOfMetricsTheme = {
  smallest: 3,
  small: 4,
  base: 8,
  large: 16,
  largest: 32,
  inputHeight: '30%',
  inputWidth: '40%',
  buttonHeight: 50,
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
