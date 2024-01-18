import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconLightMode32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16 12.4545C17.95 12.4545 19.5455 14.05 19.5455 16C19.5455 17.95 17.95 19.5455 16 19.5455C14.05 19.5455 12.4545 17.95 12.4545 16C12.4545 14.05 14.05 12.4545 16 12.4545ZM16 10.0909C12.7382 10.0909 10.0909 12.7382 10.0909 16C10.0909 19.2618 12.7382 21.9091 16 21.9091C19.2618 21.9091 21.9091 19.2618 21.9091 16C21.9091 12.7382 19.2618 10.0909 16 10.0909ZM4.18182 17.1818H6.54545C7.19545 17.1818 7.72727 16.65 7.72727 16C7.72727 15.35 7.19545 14.8182 6.54545 14.8182H4.18182C3.53182 14.8182 3 15.35 3 16C3 16.65 3.53182 17.1818 4.18182 17.1818ZM25.4545 17.1818H27.8182C28.4682 17.1818 29 16.65 29 16C29 15.35 28.4682 14.8182 27.8182 14.8182H25.4545C24.8045 14.8182 24.2727 15.35 24.2727 16C24.2727 16.65 24.8045 17.1818 25.4545 17.1818ZM14.8182 4.18182V6.54545C14.8182 7.19545 15.35 7.72727 16 7.72727C16.65 7.72727 17.1818 7.19545 17.1818 6.54545V4.18182C17.1818 3.53182 16.65 3 16 3C15.35 3 14.8182 3.53182 14.8182 4.18182ZM14.8182 25.4545V27.8182C14.8182 28.4682 15.35 29 16 29C16.65 29 17.1818 28.4682 17.1818 27.8182V25.4545C17.1818 24.8045 16.65 24.2727 16 24.2727C15.35 24.2727 14.8182 24.8045 14.8182 25.4545ZM8.89727 7.23091C8.43636 6.77 7.68 6.77 7.23091 7.23091C6.77 7.69182 6.77 8.44818 7.23091 8.89727L8.48364 10.15C8.94455 10.6109 9.70091 10.6109 10.15 10.15C10.5991 9.68909 10.6109 8.93273 10.15 8.48364L8.89727 7.23091ZM23.5164 21.85C23.0555 21.3891 22.2991 21.3891 21.85 21.85C21.3891 22.3109 21.3891 23.0673 21.85 23.5164L23.1027 24.7691C23.5636 25.23 24.32 25.23 24.7691 24.7691C25.23 24.3082 25.23 23.5518 24.7691 23.1027L23.5164 21.85ZM24.7691 8.89727C25.23 8.43636 25.23 7.68 24.7691 7.23091C24.3082 6.77 23.5518 6.77 23.1027 7.23091L21.85 8.48364C21.3891 8.94455 21.3891 9.70091 21.85 10.15C22.3109 10.5991 23.0673 10.6109 23.5164 10.15L24.7691 8.89727ZM10.15 23.5164C10.6109 23.0555 10.6109 22.2991 10.15 21.85C9.68909 21.3891 8.93273 21.3891 8.48364 21.85L7.23091 23.1027C6.77 23.5636 6.77 24.32 7.23091 24.7691C7.69182 25.2182 8.44818 25.23 8.89727 24.7691L10.15 23.5164Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLightMode32;
