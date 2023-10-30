import { theme } from '@/styles/theme';
import styled from 'styled-components';

type IconSizes = 'extrasmall' | 'small' | 'medium' | 'large';
type IconColor = 'white' | 'black' | 'inherit';

const sizes: Record<IconSizes, string> = {
  extrasmall: '16px',
  small: '24px',
  medium: '32px',
  large: '42px'
};

const colors: Record<IconColor, string> = {
  white: theme.colors.white,
  black: theme.colors.black,
  inherit: 'currentColor'
};

export interface IconProps {
  size?: IconSizes;
  color?: IconColor;
}

export const Icon = styled.svg<IconProps>`
  width: ${({ size = 'medium' }) => sizes[size]};
  height: ${({ size = 'medium' }) => sizes[size]};
  color: ${({ color = 'inherit' }) => colors[color]};
`;

Icon.defaultProps = {
  color: 'inherit',
  size: 'small'
};
