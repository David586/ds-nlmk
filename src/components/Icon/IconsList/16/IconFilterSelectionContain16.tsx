import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterSelectionContain16: FC<IIconsProps> = ({
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
        d="M5.16639 2H10.7856V14.6432H5.16639V2ZM10.2207 8.67987C10.2207 9.42437 10.0617 10.0057 9.74388 10.4237C9.42604 10.8389 8.9822 11.0465 8.41237 11.0465C7.9084 11.0465 7.50608 10.8532 7.20541 10.4667L7.14957 10.9606H6.03282V4.36318H7.27414V6.72984C7.56048 6.39482 7.93703 6.2273 8.40378 6.2273C8.97075 6.2273 9.41458 6.43634 9.73529 6.8544C10.0589 7.26961 10.2207 7.85519 10.2207 8.61115V8.67987ZM8.97934 8.58967C8.97934 8.12006 8.90489 7.77787 8.75598 7.56311C8.60708 7.34549 8.38516 7.23668 8.09023 7.23668C7.69507 7.23668 7.42304 7.39846 7.27414 7.72204V9.55609C7.4259 9.88253 7.70079 10.0457 8.09882 10.0457C8.4997 10.0457 8.76314 9.84817 8.88914 9.45301C8.94927 9.26402 8.97934 8.97624 8.97934 8.58967ZM3.75323 10.544C3.779 10.7101 3.82053 10.849 3.87779 10.9607H5.132V10.8877C5.01173 10.6614 4.95017 10.3279 4.9473 9.88688V7.87242C4.9473 7.35127 4.77836 6.94752 4.44047 6.66117C4.10544 6.37196 3.65158 6.22735 3.07888 6.22735C2.70091 6.22735 2.36015 6.29321 2.05662 6.42493C1.75309 6.55379 1.51829 6.73275 1.35221 6.96183C1.18613 7.19091 1.10309 7.44003 1.10309 7.7092H2.3444C2.3444 7.53453 2.4031 7.39708 2.52051 7.29686C2.64077 7.19664 2.80542 7.14653 3.01446 7.14653C3.25213 7.14653 3.42537 7.21096 3.53418 7.33981C3.64585 7.46867 3.70169 7.64048 3.70169 7.85524V8.12154H3.13043C2.44033 8.1244 1.91202 8.25756 1.54549 8.521C1.18183 8.78444 1 9.16242 1 9.65493C1 10.0558 1.1489 10.388 1.4467 10.6514C1.74737 10.9149 2.12535 11.0466 2.58064 11.0466C3.0617 11.0466 3.45257 10.8791 3.75323 10.544ZM3.35807 9.97707C3.20345 10.0573 3.0345 10.0973 2.85124 10.0973C2.66225 10.0973 2.51335 10.0472 2.40454 9.94701C2.29572 9.84679 2.24132 9.71936 2.24132 9.56473L2.24561 9.49171C2.2857 9.06219 2.61643 8.84743 3.23781 8.84743H3.70169V9.64634C3.62724 9.78379 3.5127 9.89403 3.35807 9.97707ZM13.6126 9.85681C13.4695 9.9828 13.2833 10.0458 13.0543 10.0458C12.7565 10.0458 12.5345 9.94128 12.3885 9.73225C12.2425 9.52321 12.1695 9.1796 12.1695 8.7014V8.57254C12.1695 8.10007 12.2425 7.75931 12.3885 7.55028C12.5374 7.33838 12.7565 7.23243 13.0457 7.23243C13.2805 7.23243 13.4695 7.30831 13.6126 7.46008C13.7558 7.60898 13.8303 7.8037 13.836 8.04423H15C14.9943 7.49444 14.8153 7.0549 14.4631 6.7256C14.1138 6.39343 13.6484 6.22735 13.0672 6.22735C12.4028 6.22735 11.8802 6.44068 11.4994 6.86734C11.1186 7.294 10.9281 7.86526 10.9281 8.58113V8.66274C10.9281 9.40724 11.12 9.99139 11.5037 10.4152C11.8874 10.8361 12.4114 11.0466 13.0757 11.0466C13.4308 11.0466 13.7544 10.975 14.0465 10.8318C14.3414 10.6858 14.5733 10.4825 14.7423 10.2219C14.9112 9.95846 14.9971 9.66925 15 9.35427H13.836C13.8303 9.5633 13.7558 9.73082 13.6126 9.85681Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterSelectionContain16;
