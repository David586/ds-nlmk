import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconBirthday16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={classes}>
      <path d="M5.5 2.83331C5.5 2.37308 4.66667 1.33331 4.66667 1.33331C4.66667 1.33331 3.83333 2.37308 3.83333 2.83331C3.83333 3.29355 4.20643 3.66665 4.66667 3.66665C5.1269 3.66665 5.5 3.29355 5.5 2.83331Z" fill={htmlColor || 'currentColor'}/>
      <path d="M12.1667 2.83331C12.1667 2.37308 11.3333 1.33331 11.3333 1.33331C11.3333 1.33331 10.5 2.37308 10.5 2.83331C10.5 3.29355 10.8731 3.66665 11.3333 3.66665C11.7936 3.66665 12.1667 3.29355 12.1667 2.83331Z" fill={htmlColor || 'currentColor'}/>
      <path d="M8 1.33331C8 1.33331 8.83333 2.37308 8.83333 2.83331C8.83333 3.29355 8.46024 3.66665 8 3.66665C7.53976 3.66665 7.16667 3.29355 7.16667 2.83331C7.16667 2.37308 8 1.33331 8 1.33331Z" fill={htmlColor || 'currentColor'}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7.41733C2.84985 7.71335 2 8.75742 2 9.99998V14.6666H14V9.99998C14 8.75742 13.1502 7.71335 12 7.41733V4.66665H10.6667V7.33331H8.66667V4.66665H7.33333V7.33331H5.33333V4.66665H4V7.41733ZM12.6667 9.99998V10.3448C12.277 10.1745 11.811 9.99998 11 9.99998C10.1156 9.99998 9.64156 10.2075 9.22924 10.3908L9.21781 10.3959C8.88528 10.5437 8.60867 10.6666 8 10.6666C7.39133 10.6666 7.11472 10.5437 6.78219 10.3959L6.77076 10.3908C6.35844 10.2075 5.88437 9.99998 5 9.99998C4.189 9.99998 3.72304 10.1745 3.33333 10.3448V9.99998C3.33333 9.2636 3.93029 8.66665 4.66667 8.66665H11.3333C12.0697 8.66665 12.6667 9.2636 12.6667 9.99998ZM3.33333 13.3333V11.789C3.49394 11.7319 3.63567 11.6692 3.77076 11.6092L3.78219 11.6041C4.11472 11.4563 4.39133 11.3333 5 11.3333C5.60867 11.3333 5.88528 11.4563 6.21782 11.6041L6.22924 11.6092C6.64156 11.7924 7.11563 12 8 12C8.88437 12 9.35844 11.7924 9.77076 11.6092L9.78219 11.6041C10.1147 11.4563 10.3913 11.3333 11 11.3333C11.6087 11.3333 11.8853 11.4563 12.2178 11.6041L12.2292 11.6092C12.3643 11.6692 12.5061 11.7319 12.6667 11.789V13.3333H3.33333Z" fill={htmlColor || 'currentColor'}/>
    </svg>
  );
};

export default IconBirthday16;
