import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconExternalLink16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24298 3.04224C9.01971 3.12184 8.89601 3.31896 8.89501 3.59679C8.89419 3.82294 8.97674 3.97892 9.156 4.09L9.28934 4.17263L10.1433 4.18133L10.9973 4.19006L9.3842 5.80636C8.08463 7.10856 7.76459 7.4434 7.73735 7.52925C7.63304 7.85819 7.88088 8.23991 8.2253 8.2807C8.50264 8.31353 8.43998 8.36652 10.1941 6.61617L11.8105 5.00318L11.8192 5.85712L11.8279 6.71103L11.9105 6.84437C12.0216 7.02361 12.1776 7.10616 12.4038 7.10533C12.69 7.10431 12.9047 6.96054 12.9698 6.72637C13.0131 6.57053 13.0085 3.52372 12.9648 3.37774C12.9215 3.23347 12.7671 3.07904 12.6228 3.03582C12.4508 2.98426 9.38927 2.99007 9.24298 3.04224ZM3.98364 3.60847C3.50404 3.69137 3.10715 4.09801 3.02677 4.58888C2.99108 4.80683 2.99108 11.7737 3.02677 11.9917C3.10927 12.4955 3.5045 12.8907 4.00838 12.9732C4.22634 13.0089 11.1937 13.0089 11.4116 12.9732C11.9224 12.8896 12.3149 12.4913 12.3953 11.9751C12.4115 11.871 12.4194 11.2864 12.4145 10.5473C12.4069 9.38635 12.4026 9.2886 12.3548 9.1992C12.2829 9.06473 12.2286 9.00821 12.1171 8.95167C11.7779 8.77977 11.3582 8.93803 11.2652 9.27298C11.2467 9.33983 11.2359 9.82277 11.2359 10.597L11.2357 11.8158H7.71H4.1843V8.29028V4.7648L5.40315 4.76463C6.21097 4.76455 6.65912 4.75419 6.73208 4.73392C6.90104 4.68702 7.06207 4.50945 7.10096 4.32717C7.16398 4.03172 7.05882 3.78402 6.8148 3.65328C6.70699 3.59549 6.67675 3.59414 5.41003 3.58996C4.69801 3.58762 4.05614 3.59593 3.98364 3.60847Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconExternalLink16;
