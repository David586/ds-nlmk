import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTableAttributeMappingError24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
      <g clipPath="url(#clip0_28632_300875)">
        <mask
          id="masked"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-2"
          width="26"
          height="26"
          className={styles.mask}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 11.2916C25.2447 9.88138 26 8.02889 26 6C26 3.97111 25.2447 2.11862 24 0.708351V0H23.2916C21.8814 -1.24473 20.0289 -2 18 -2C15.9711 -2 14.1186 -1.24473 12.7084 0H0V24H24V11.2916ZM12.7084 0C11.0475 1.46589 10 3.61061 10 6C10 10.4183 13.5817 14 18 14C20.3894 14 22.5341 12.9525 24 11.2916V0.708351C23.7788 0.457776 23.5422 0.221162 23.2916 0H12.7084Z"
            fill="black"
          />
        </mask>
        <g mask="url(#masked)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 7H8V11H5V7ZM10 5V13H3V5H10Z"
            fill={htmlColor || 'currentColor'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 7H13V11H10V7ZM15 5V13H8V5H15Z"
            fill={htmlColor || 'currentColor'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13H13V17H10V13ZM15 11V19H8V11H15Z"
            fill={htmlColor || 'currentColor'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 13H8V17H5V13ZM10 11V19H3V11H10Z"
            fill={htmlColor || 'currentColor'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 7H18V11H15V7ZM20 5V13H13V5H20Z"
            fill={htmlColor || 'currentColor'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 13H18V17H15V13ZM20 11V19H13V11H20Z"
            fill={htmlColor || 'currentColor'}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0ZM17.2491 2.47119L17.2491 5.99976H18.7491L18.7491 2.47119H17.2491ZM17.9979 7.25028C17.445 7.25057 16.997 7.69904 16.9973 8.25197C16.9976 8.80489 17.4461 9.25289 17.999 9.2526C18.5519 9.25231 18.9999 8.80384 18.9996 8.25091C18.9993 7.69799 18.5509 7.24999 17.9979 7.25028Z"
          fill="#40515E"
        />
      </g>
      <defs>
        <clipPath id="clip0_28632_300875">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconTableAttributeMappingError24;
