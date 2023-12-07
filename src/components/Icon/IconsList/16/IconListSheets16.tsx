import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconListSheets16: FC<IIconsProps> = ({
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
        d="M7.23159 10.0422C7.23159 10.7601 6.64956 11.3422 5.93159 11.3422C5.21362 11.3422 4.63159 10.7601 4.63159 10.0422C4.63159 9.32419 5.21362 8.74216 5.93159 8.74216C6.64956 8.74216 7.23159 9.32419 7.23159 10.0422Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31195 2.62274L2.54592 6.38465C2.28291 6.63593 2.0468 6.91642 1.84265 7.22195C1.29324 8.04419 1 9.01089 1 9.9998C1 10.9887 1.29325 11.9554 1.84265 12.7776C2.39206 13.5999 3.17295 14.2408 4.08658 14.6192C5.00021 14.9976 6.00555 15.0967 6.97545 14.9037C7.94535 14.7108 8.83627 14.2346 9.53553 13.5353L13.56 9.51783L13.5573 9.51515C14.0028 9.04629 14.3532 8.49536 14.5889 7.89284C14.8291 7.2789 14.9455 6.62352 14.9315 5.96442C14.9174 5.30531 14.7732 4.65549 14.507 4.05235C14.2408 3.44921 13.858 2.90467 13.3806 2.45005C12.9031 1.99543 12.3405 1.63972 11.7251 1.40338C11.1096 1.16704 10.4535 1.05475 9.79453 1.07295C9.13553 1.09116 8.48663 1.23951 7.88518 1.50947C7.29344 1.77506 6.75913 2.15321 6.31195 2.62274ZM13.3783 7.41917C13.2005 7.87349 12.9347 8.28817 12.596 8.63934L12.598 8.64123L8.61669 12.6157C8.09924 13.1332 7.43956 13.4859 6.72183 13.6287C6.0041 13.7715 5.26016 13.6982 4.58407 13.4182C3.90798 13.1381 3.33012 12.6639 2.92356 12.0554C2.517 11.4469 2.3 10.7316 2.3 9.9998C2.3 9.26801 2.517 8.55265 2.92356 7.94419C3.07575 7.71643 3.25192 7.50749 3.44827 7.32049C3.77649 7.0079 4.16106 6.75666 4.58407 6.58145C5.26016 6.3014 6.0041 6.22813 6.72183 6.37089C7.43956 6.51366 8.09884 6.86605 8.61629 7.3835L9.07591 7.84312L12.9663 3.95278C13.103 4.14859 13.2208 4.35766 13.3177 4.57721C13.5146 5.02353 13.6214 5.5044 13.6318 5.99214C13.6422 6.47988 13.556 6.96486 13.3783 7.41917ZM12.0463 3.03423C11.8022 2.86433 11.538 2.72408 11.259 2.61697C10.8036 2.44208 10.3181 2.35898 9.83044 2.37246C9.34277 2.38593 8.86259 2.49571 8.41751 2.69548C7.97764 2.89291 7.58065 3.17439 7.24882 3.52404L7.24301 3.53018C7.24103 3.53227 7.23905 3.53437 7.23708 3.53647L5.7663 5.00526C6.16943 4.9864 6.57546 5.01631 6.97545 5.09587C7.73136 5.24623 8.43929 5.56866 9.04591 6.03465L12.0463 3.03423Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconListSheets16;
