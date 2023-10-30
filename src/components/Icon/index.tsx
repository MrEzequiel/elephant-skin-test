import React from 'react';
import * as S from './styles';

export const ArrowLongRight = (props: S.IconProps) => (
  <S.Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 33"
    fill="none"
    {...props}
  >
    <path
      d="M2.2853 16.6008L29.7139 16.6008M29.7139 16.6008L22.1845 24.1302M29.7139 16.6008L22.1845 9.07141"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </S.Icon>
);

export const EyeClosed = (props: S.IconProps) => (
  <S.Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_336_77)">
      <path
        d="M15.5614 14.9502C14.1369 16.036 12.4024 16.6376 10.6114 16.6668C4.7781 16.6668 1.44476 10.0002 1.44476 10.0002C2.48134 8.06843 3.91904 6.38069 5.66143 5.05018M8.86143 3.53352C9.43504 3.39925 10.0223 3.33213 10.6114 3.33352C16.4448 3.33352 19.7781 10.0002 19.7781 10.0002C19.2722 10.9465 18.669 11.8375 17.9781 12.6585M12.3781 11.7668C12.1492 12.0125 11.8732 12.2095 11.5666 12.3461C11.2599 12.4828 10.9288 12.5562 10.5932 12.5622C10.2575 12.5681 9.92407 12.5063 9.61277 12.3806C9.30148 12.2549 9.0187 12.0677 8.7813 11.8303C8.54391 11.5929 8.35676 11.3101 8.23102 10.9988C8.10528 10.6875 8.04354 10.3541 8.04946 10.0184C8.05538 9.68277 8.12885 9.35172 8.26549 9.04506C8.40213 8.73839 8.59914 8.46239 8.84476 8.23352"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.44476 0.833496L19.7781 19.1668"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_336_77">
        <rect
          width="20"
          height="20"
          fill="currentColor"
          transform="translate(0.61145)"
        />
      </clipPath>
    </defs>
  </S.Icon>
);

export const EyeOpen = (props: S.IconProps) => (
  <S.Icon
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </S.Icon>
);

export const Close = (props: S.IconProps) => (
  <S.Icon
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </S.Icon>
);
