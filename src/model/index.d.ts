interface IColorTheme {
  background: string;
  backgroundSecundary: string;
  backgroundModal: string;
  elements: string;
  elementsSecundary: string;
  elementsThird: string;
  text: string;
  textSecundary: string;
  textElements: string;
  textElementsSecundary: string;
  textHighlight: string;
  warn: string;
  error: string;
  success: string;
}

interface IFontFamilyTheme {
  regular: string;
  bold: string;
  light: string;
  italic: string;
}

interface IFontSizeTheme {
  smallest: number;
  small: number;
  base: number;
  large: number;
  largest: number;
  extraLagest: number;
}

interface IMetricsTheme {
  smallest: number;
  small: number;
  base: number;
  large: number;
  largest: number;
  inputHeight: string;
  inputWidth: string;
  buttonHeight: number;
  buttonWidth: string;
  buttonHeightSmall: string;
  buttonWidthSmall: string;
  radiusBase: number;
  radiusLarge: number;
  radiusLargest: number;
  radiusRounded: number;
  borderWidthBase: number;
  borderWidthSmall: number;
  borderWidthLarger: number;
  screenWidth: number;
  screenHeight: number;
  avatarSize: number;
}

interface ITheme {
  metrics: IMetricsTheme,
  fontSize: IFontSizeTheme,
  colors: IColorTheme,
  fontFamily: IFontFamilyTheme,
}

export const Midway:ITheme;
export const Riachuelo:ITheme;
