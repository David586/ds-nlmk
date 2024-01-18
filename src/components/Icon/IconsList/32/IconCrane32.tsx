import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconCrane32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9169 6.03755L27.3927 12.542C27.7502 12.7037 28.0048 13.0613 27.9999 13.4776V27.0302C27.951 27.5396 27.4907 28 26.9325 28H5.03028C4.47208 28 4.0118 27.5396 4.0118 26.9813V13.5706C3.95794 13.2376 4.09014 12.9045 4.37415 12.6938C4.38884 12.684 13.0459 6.03755 13.0459 6.03755H5.03028C4.47208 6.03755 4.0118 5.57714 4.0118 5.01878C4.0118 4.4604 4.47208 4 5.03028 4H26.9863C27.5446 4 27.9999 4.4604 27.9999 5.01878C27.9999 5.57714 27.4907 6.03755 26.9325 6.03755H18.9169ZM7.92413 12.4587H24.0044L15.9839 6.29224L7.92413 12.4587ZM5.99979 26.0114H25.9679V14.4473H5.99979V26.0114ZM16.9609 22.2752C16.9609 22.8103 16.5198 23.2516 15.9848 23.2516C15.4452 23.2516 15.0088 22.8103 15.0088 22.2752V17.7832C15.0088 17.2481 15.4499 16.8069 15.9848 16.8069C16.5198 16.8069 16.9609 17.2481 16.9609 17.7832V22.2752ZM11.0561 23.2516C11.5911 23.2516 12.0322 22.8103 12.0322 22.2752V17.7832C12.0322 17.2481 11.5911 16.8069 11.0561 16.8069C10.5212 16.8069 10.0801 17.2481 10.0801 17.7832V22.2752C10.0801 22.8103 10.5165 23.2516 11.0561 23.2516ZM21.8925 22.2752C21.8925 22.8103 21.4514 23.2516 20.9165 23.2516C20.3768 23.2516 19.9404 22.8103 19.9404 22.2752V17.7832C19.9404 17.2481 20.3815 16.8069 20.9165 16.8069C21.4514 16.8069 21.8925 17.2481 21.8925 17.7832V22.2752Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCrane32;
