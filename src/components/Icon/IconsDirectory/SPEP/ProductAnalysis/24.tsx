import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProductAnalysis24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.765 11.274a4.16 4.16 0 0 0-.063-4.196 4.279 4.279 0 0 0-1.58-1.523A4.393 4.393 0 0 0 13.98 5h-3.96a4.376 4.376 0 0 0-3.056 1.241 4.194 4.194 0 0 0-1.268 2.993c0 .162.067.318.184.433a.634.634 0 0 0 .886 0 .608.608 0 0 0 .184-.433 2.982 2.982 0 0 1 .9-2.125 3.107 3.107 0 0 1 2.17-.88h.917a4.192 4.192 0 0 0-1.239 2.397c-.135.91.037 1.838.49 2.644H6.324a4.371 4.371 0 0 0-3.058 1.24A4.19 4.19 0 0 0 2 15.503c0 1.123.456 2.2 1.266 2.994a4.372 4.372 0 0 0 3.058 1.24h3.958a4.384 4.384 0 0 0 2.123-.55 4.28 4.28 0 0 0 1.574-1.5 4.28 4.28 0 0 0 1.593 1.51 4.393 4.393 0 0 0 4.284-.039 4.27 4.27 0 0 0 1.564-1.537 4.163 4.163 0 0 0 .023-4.195 4.275 4.275 0 0 0-1.547-1.554 4.39 4.39 0 0 0-2.13-.598ZM13.98 6.228c.607 0 1.2.176 1.705.507.505.33.899.8 1.131 1.349.232.549.293 1.153.175 1.736a2.986 2.986 0 0 1-.84 1.54 3.09 3.09 0 0 1-1.572.822 3.132 3.132 0 0 1-1.774-.171 3.057 3.057 0 0 1-1.378-1.107 2.962 2.962 0 0 1-.517-1.67c0-.797.324-1.561.9-2.125a3.107 3.107 0 0 1 2.17-.88Zm-7.655 12.28a3.103 3.103 0 0 1-2.168-.88 2.974 2.974 0 0 1-.898-2.125c0-.796.323-1.56.898-2.124a3.103 3.103 0 0 1 2.168-.881h.917a4.22 4.22 0 0 0-.95 1.376 4.148 4.148 0 0 0 0 3.258c.22.516.543.984.95 1.377h-.917Zm3.958 0a3.124 3.124 0 0 1-1.376-.315 3.057 3.057 0 0 1-1.085-.885 2.945 2.945 0 0 1-.491-2.649 2.99 2.99 0 0 1 .697-1.202 3.074 3.074 0 0 1 1.175-.77 3.13 3.13 0 0 1 2.733.288l-.32 1.066-1.264-.413a.64.64 0 0 0-.478.034.619.619 0 0 0-.315.354l-.627 1.842a.602.602 0 0 0 .183.66.629.629 0 0 0 .456.149.64.64 0 0 0 .43-.211.61.61 0 0 0 .12-.21l.43-1.259 1.286.42a.637.637 0 0 0 .683-.193.61.61 0 0 0 .117-.216l.3-.999a2.951 2.951 0 0 1 .006 3.008 3.027 3.027 0 0 1-1.124 1.1 3.114 3.114 0 0 1-1.536.402Zm7.394 0c-.607 0-1.2-.176-1.706-.506a3.02 3.02 0 0 1-1.13-1.349 2.947 2.947 0 0 1-.175-1.736 2.999 2.999 0 0 1 .84-1.54 3.09 3.09 0 0 1 1.572-.822 3.13 3.13 0 0 1 1.774.171c.56.228 1.04.613 1.378 1.107a2.96 2.96 0 0 1 .517 1.67 2.978 2.978 0 0 1-.9 2.125 3.107 3.107 0 0 1-2.17.88Z"
      />
    </svg>
  );
};

export default IconProductAnalysis24;