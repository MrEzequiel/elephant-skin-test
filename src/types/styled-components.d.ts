import 'styled-components';
import { DefaultTheme as _DefaultTheme } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends _DefaultTheme {}
}
