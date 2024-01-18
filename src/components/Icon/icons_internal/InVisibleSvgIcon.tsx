import React, { FC } from 'react';

import { IIconsProps } from '../types';

export const InVisibleSvgIcon: FC<IIconsProps> = ({ htmlColor }): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.01 7.8702L7.42 6.4502L25.15 24.2002L23.74 25.6102L20.31 22.1802C18.97 22.7002 17.52 23.0002 16 23.0002C11 23.0002 6.73 19.8902 5 15.5002C5.77 13.5302 7.06 11.8302 8.69 10.5502L6.01 7.8702ZM21 15.5002C21 12.7402 18.76 10.5002 16 10.5002C15.49 10.5002 15 10.6002 14.53 10.7402L12.36 8.5702C13.51 8.2002 14.73 8.0002 16 8.0002C21 8.0002 25.27 11.1102 27 15.4902C26.31 17.2502 25.21 18.7902 23.82 20.0202L20.76 16.9602C20.9 16.5002 21 16.0102 21 15.5002ZM16 20.5002C13.24 20.5002 11 18.2602 11 15.5002C11 14.7302 11.18 14.0002 11.49 13.3602L13.06 14.9302C13.03 15.1102 13 15.3002 13 15.5002C13 17.1602 14.34 18.5002 16 18.5002C16.2 18.5002 16.38 18.4702 16.57 18.4302L18.14 20.0002C17.49 20.3202 16.77 20.5002 16 20.5002ZM18.97 15.1702C18.82 13.7702 17.72 12.6802 16.33 12.5302L18.97 15.1702Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};
