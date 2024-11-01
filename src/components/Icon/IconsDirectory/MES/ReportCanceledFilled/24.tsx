import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportCanceledFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.5 22.5h-15A1.5 1.5 0 0 1 3 21V4.5A1.5 1.5 0 0 1 4.5 3h3.065a1.873 1.873 0 0 1 1.622-.938h.938c0-.62.84-1.124 1.875-1.124 1.036 0 1.875.503 1.875 1.125h.938A1.873 1.873 0 0 1 16.434 3H19.5A1.5 1.5 0 0 1 21 4.5V21a1.5 1.5 0 0 1-1.5 1.5ZM8.625 4.5c.281.656.754 1.5 1.688 1.5h3.374c.954 0 1.411-.837 1.688-1.5h-6.75Zm7.782 6.668-1.325-1.325L12 12.924 8.918 9.843l-1.325 1.325 3.081 3.082-3.081 3.082 1.325 1.325L12 15.576l3.082 3.081 1.325-1.325-3.081-3.082 3.081-3.082Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportCanceledFilled24;