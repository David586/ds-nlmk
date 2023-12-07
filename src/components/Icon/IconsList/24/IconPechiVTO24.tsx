import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconPechiVTO24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7046 18.1059H9.32166V7.57415H14.7046V18.1059ZM15.915 18.1059L15.9135 17.3257H15.4162L15.4044 14.7956H16.1124L16.1042 7.90389L13.4374 5.42015L12.7176 5.41165L12.2711 4.75105L12.0394 4.75001L11.8036 4.75107L11.3546 5.41172L10.6307 5.4202L7.95541 7.9043V14.7405H8.63854V17.3051H8.13854V18.1059H6.90446V18.6059H5.23355C5.16116 18.899 5.01421 19.1219 4.92035 19.25H19.0796C18.9858 19.1219 18.8388 18.899 18.7664 18.6059H17.182L17.1782 18.1059H15.915ZM18.1744 17.6059H19.9935C19.9935 17.6059 19.7915 17.9368 19.7405 18.1281C19.6918 18.3108 19.7544 18.4612 19.8504 18.6059C19.8873 18.6616 19.9293 18.7165 19.9717 18.772C20.0973 18.9365 20.2274 19.1068 20.2464 19.3224C20.2854 19.7645 19.9935 20.25 19.9935 20.25H4.00654C4.00654 20.25 3.71456 19.7645 3.75359 19.3224C3.77261 19.1068 3.9027 18.9365 4.02834 18.772C4.07075 18.7165 4.11265 18.6616 4.1496 18.6059C4.24558 18.4612 4.30816 18.3108 4.25949 18.1281C4.20853 17.9368 4.00654 17.6059 4.00654 17.6059H5.90446V16.3051H7.63854V15.7405H6.95541V7.46822L10.2331 4.42479L10.821 4.4179L11.2725 3.75344L12.0394 3.75L12.8038 3.75344L13.2529 4.4179L13.8359 4.42479L17.1037 7.46822L17.1136 15.7923V15.7956H16.4091L16.4116 16.3257H18.1645L18.1744 17.6059ZM4.86811 19.7424C4.86811 19.7424 4.86767 19.7416 4.86684 19.7402L4.86811 19.7424ZM19.1332 19.7402L19.1321 19.742C19.1318 19.7425 19.1319 19.7424 19.1321 19.742C19.1323 19.7417 19.1326 19.7411 19.1332 19.7402ZM13.7046 17.1059V8.57415H10.3217V17.1059H13.7046Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPechiVTO24;
