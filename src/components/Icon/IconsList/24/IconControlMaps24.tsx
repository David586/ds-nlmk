import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconControlMaps24: FC<IIconsProps> = ({
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
      <path
        d="M4.9541 16.5322C5.59131 16.5322 6.15527 16.1514 6.41895 15.6021L17.4565 18.8394C17.6396 19.5425 18.2842 20.0625 19.0459 20.0625C19.9395 20.0625 20.6792 19.3301 20.6792 18.4292C20.6792 17.748 20.2544 17.1621 19.6685 16.9131L19.3608 9.55225C19.9834 9.3252 20.4375 8.71729 20.4375 8.00684C20.4375 7.10596 19.7051 6.37354 18.8115 6.37354C18.2109 6.37354 17.6909 6.6958 17.4053 7.17188L11.2969 5.49463C11.2969 4.63037 10.5645 3.89062 9.6709 3.89062C8.77002 3.89062 8.03027 4.63037 8.03027 5.53125C8.03027 6.01465 8.24268 6.4541 8.57959 6.75439L5.18848 13.2729C5.10791 13.2583 5.03467 13.2583 4.9541 13.2583C4.05322 13.2583 3.31348 13.9907 3.31348 14.8916C3.31348 15.7925 4.05322 16.5322 4.9541 16.5322ZM9.6709 7.17188C10.2056 7.17188 10.689 6.90088 10.9819 6.49072L17.1782 8.19727C17.2515 8.84912 17.7202 9.39111 18.3281 9.57422L18.5918 16.8472C18.1084 16.9937 17.7129 17.3525 17.5225 17.814L6.55811 14.5913C6.49951 14.2837 6.35303 13.998 6.14795 13.7783L9.54639 7.16455C9.58301 7.16455 9.62695 7.17188 9.6709 7.17188Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconControlMaps24;
