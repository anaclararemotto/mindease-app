import type { Colors } from './colors';

export type ThemeName =
  | 'lightPurple' | 'darkPurple'
  | 'lightObsidian' | 'darkObsidian'
  | 'lightViolet' | 'darkViolet'
  | 'lightRed' | 'darkRed'
  | 'lightOrange' | 'darkOrange'
  | 'lightTanger' | 'darkTanger'
  | 'lightYellow' | 'darkYellow'
  | 'lightBrown' | 'darkBrown'
  | 'lightChocolate' | 'darkChocolate'
  | 'lightCinnamon' | 'darkCinnamon'
  | 'lightQuartz' | 'darkQuartz'
  | 'lightBlush' | 'darkBlush'
  | 'lightPeony' | 'darkPeony'
  | 'lightBlueSky' | 'darkBlueSky'
  | 'lightCobalt' | 'darkCobalt'
  | 'lightPolar' | 'darkPolar'
  | 'lightCian' | 'darkCian'
  | 'lightGreen' | 'darkGreen'
  | 'lightForest' | 'darkForest';

export type Theme = {
  name: ThemeName;
  colors: Colors;
};