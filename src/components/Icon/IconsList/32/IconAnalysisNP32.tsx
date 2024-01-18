import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAnalysisNP32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3.85986 16.821H6.85862V20.1593C6.85862 21.9753 7.99793 23.0519 10.1368 23.4325L15.1885 24.3241V28.1409C15.1885 28.6738 15.4895 29 16.0054 29C16.4998 29 16.8115 28.6738 16.8115 28.1409V24.6177L21.8632 25.5094C23.9161 25.8791 25.1414 24.5742 25.1414 22.2472V16.821H28.1401C28.6776 16.821 29 16.5056 29 16.0054C29 15.4835 28.6776 15.179 28.1401 15.179H25.1414V9.7637C25.1414 7.31702 24.0021 6.11 21.8632 6.49059L16.8115 7.39314V3.86993C16.8115 3.32622 16.4998 3 16.0054 3C15.4895 3 15.1885 3.32622 15.1885 3.86993V7.67587L10.1368 8.57842C7.99793 8.95901 6.85862 10.0138 6.85862 11.8407V15.179H3.85986C3.32245 15.179 3 15.4835 3 16.0054C3 16.5056 3.32245 16.821 3.85986 16.821ZM21.9492 8.13258C22.9702 7.95859 23.5184 8.53492 23.5184 9.74195V15.179H16.8115V9.02426L21.9492 8.13258ZM8.4816 11.8189C8.4816 10.9055 9.02976 10.3835 10.0508 10.2095L15.1885 9.30698V15.179H8.4816V11.8189ZM10.0508 21.7905C9.02976 21.6165 8.4816 21.0945 8.4816 20.1811V16.821H15.1885V22.693L10.0508 21.7905ZM21.9492 23.8783L16.8115 22.9757V16.821H23.5184V22.2689C23.5184 23.4216 22.938 24.0414 21.9492 23.8783Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAnalysisNP32;
