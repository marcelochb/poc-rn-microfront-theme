type ModelOfColorTheme = {
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

type ModelOfFontFamilyTheme = {
  regular: string;
  bold: string;
  light: string;
  italic: string;
}

type ModelOfFontSizeTheme = {
  smallest: number;
  small: number;
  base: number;
  large: number;
  largest: number;
  extraLagest: number;
}

type ModelOfMetricsTheme = {
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

type ModelOfTheme = {
  metrics: ModelOfMetricsTheme,
  fontSize: ModelOfFontSizeTheme,
  colors: ModelOfColorTheme,
  fontFamily: ModelOfFontFamilyTheme,
}

export const Midway:ModelOfTheme;
export const Riachuelo:ModelOfTheme;
