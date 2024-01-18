import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconKPE32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8.29719 9.33207L8.29733 9.33194C8.31922 9.30991 8.34187 9.29092 8.3637 9.2741C10.4588 7.18921 13.3329 5.9 16.5 5.9C19.667 5.9 22.5411 7.18911 24.6362 9.27403C24.6581 9.29087 24.6808 9.30991 24.7027 9.33207C24.7248 9.35432 24.7436 9.37736 24.7602 9.39933C26.8242 11.5156 28.1 14.4185 28.1 17.6169C28.1 20.746 26.8935 23.6886 24.7028 25.9016L24.7028 25.9017C24.6379 25.9671 24.5628 26.0164 24.4825 26.0493C24.4022 26.0821 24.3169 26.0986 24.2318 26.0986C24.0613 26.0986 23.8906 26.0328 23.7608 25.9016L21.9898 24.1126C21.7303 23.8505 21.7304 23.4261 21.9898 23.1639L21.9898 23.1639C22.2498 22.9013 22.6718 22.9013 22.9317 23.1639L24.2165 24.4618C25.7211 22.7355 26.6031 20.584 26.7473 18.2882H24.9298C24.5612 18.2882 24.2642 17.9868 24.2642 17.6169C24.2642 17.247 24.5612 16.9456 24.9298 16.9456H26.7471C26.5975 14.59 25.666 12.4461 24.2127 10.7758L22.9317 12.0699C22.8019 12.201 22.6312 12.2668 22.4608 12.2668C22.2903 12.2668 22.1196 12.201 21.9898 12.0699C21.7303 11.8078 21.7304 11.3833 21.9898 11.1212L21.9898 11.1212L23.2723 9.82561C21.619 8.3571 19.497 7.41595 17.1656 7.26457V9.10138C17.1656 9.47126 16.8685 9.7727 16.5 9.7727C16.1315 9.7727 15.8344 9.47126 15.8344 9.10138V7.26457C13.503 7.41595 11.381 8.35702 9.72768 9.82554L11.0101 11.1212C11.0101 11.1212 11.0101 11.1212 11.0101 11.1212C11.2696 11.3833 11.2696 11.8077 11.0101 12.0699L11.0101 12.0699C10.8803 12.201 10.7096 12.2668 10.5392 12.2668C10.3687 12.2668 10.198 12.201 10.0682 12.0699L8.78719 10.7758C7.33391 12.446 6.40247 14.5899 6.25278 16.9456H8.07009C8.4386 16.9456 8.73566 17.247 8.73566 17.6169C8.73566 17.9868 8.4386 18.2882 8.07009 18.2882H6.25256C6.39672 20.584 7.27883 22.7355 8.78344 24.4617L10.0682 23.1639C10.3281 22.9013 10.7501 22.9013 11.0101 23.1639L11.0101 23.1639C11.2696 23.426 11.2696 23.8504 11.0101 24.1126L11.0101 24.1126L9.26985 25.8707L9.26983 25.8707L8.29719 9.33207ZM8.29719 9.33207C8.27523 9.35426 8.25638 9.3772 8.23968 9.39938C6.17583 11.5157 4.9 14.4185 4.9 17.6169C4.9 20.7457 6.10622 23.6878 8.29635 25.9007L8.29726 25.9017L8.29877 25.9031C8.2991 25.9035 8.29942 25.9038 8.29975 25.9041C8.42949 26.0347 8.59966 26.1 8.76966 26.1C8.94018 26.1 9.11085 26.0342 9.2407 25.903L8.29719 9.33207ZM14.8966 21.1275C15.3942 21.4976 15.9537 21.6958 16.5148 21.6958C17.4293 21.6958 18.2544 21.1773 18.6686 20.3455C19.1027 19.4737 18.9886 18.4369 18.3763 17.5753C18.3096 17.4811 18.2258 17.3951 18.133 17.326C18.1079 17.3074 18.0826 17.2896 18.0576 17.2726L19.8121 12.7921C19.9592 12.4164 19.7817 11.9876 19.4108 11.8357C19.0385 11.6831 18.6184 11.869 18.4709 12.2459C18.4709 12.2459 18.4709 12.2459 18.4709 12.2459L16.7007 16.7664C16.6394 16.7611 16.5774 16.7578 16.5148 16.7578C15.6003 16.7578 14.7752 17.2763 14.3609 18.1081L14.4505 18.1527L14.3609 18.1081C13.9268 18.9799 14.041 20.0168 14.6536 20.879C14.7204 20.973 14.804 21.0587 14.8966 21.1275ZM14.8966 21.1275L14.9563 21.0473M14.8966 21.1275C14.8966 21.1275 14.8966 21.1275 14.8966 21.1275L14.9563 21.0473M14.9563 21.0473C15.4388 21.4062 15.9778 21.5958 16.5148 21.5958C17.3904 21.5958 18.1814 21.0996 18.5791 20.3009C18.9948 19.466 18.8883 18.4685 18.2948 17.6332M14.9563 21.0473L18.2948 17.6332M18.2948 17.6332C18.2341 17.5475 18.1576 17.4691 18.0733 17.4063C18.0279 17.3725 17.9815 17.3417 17.9351 17.311L18.2948 17.6332ZM8.31241 25.9142C8.31249 25.9143 8.31233 25.9142 8.31241 25.9142ZM15.6487 18.775L15.6487 18.775C15.8164 18.4382 16.1484 18.2307 16.5148 18.2307C16.6304 18.2307 16.7472 18.2509 16.8652 18.291C16.8674 18.2921 16.8719 18.2943 16.8771 18.2965L16.8777 18.2967C16.8938 18.3032 16.9095 18.3085 16.9223 18.3126C17.0271 18.3541 17.1323 18.4105 17.2374 18.484C17.5117 18.8956 17.5561 19.3264 17.3808 19.6786C17.213 20.0154 16.881 20.2228 16.5147 20.2228C16.2786 20.2228 16.0359 20.1403 15.792 19.9694C15.5177 19.5579 15.4733 19.1271 15.6487 18.775ZM8.29274 25.8968L8.29303 25.8972L8.29274 25.8968Z"
        fill={htmlColor || 'currentColor'}
        stroke="currentColor"
        strokeWidth="0.2"
      />
    </svg>
  );
};

export default IconKPE32;
