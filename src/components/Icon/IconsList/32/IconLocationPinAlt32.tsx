import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconLocationPinAlt32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16.5 14.4273C17.0192 14.4273 17.5267 14.2746 17.9584 13.9887C18.3901 13.7028 18.7265 13.2963 18.9252 12.8208C19.1239 12.3453 19.1758 11.8221 19.0746 11.3173C18.9733 10.8125 18.7233 10.3488 18.3562 9.98489C17.989 9.62096 17.5213 9.37312 17.0121 9.27271C16.5029 9.1723 15.9751 9.22383 15.4955 9.42079C15.0158 9.61775 14.6058 9.95129 14.3174 10.3792C14.029 10.8072 13.875 11.3103 13.875 11.825C13.875 12.5151 14.1516 13.177 14.6438 13.6651C15.1361 14.1531 15.8038 14.4273 16.5 14.4273ZM15.5681 23.4181C15.6901 23.5401 15.8353 23.6369 15.9952 23.7029C16.1552 23.769 16.3267 23.803 16.5 23.803C16.6733 23.803 16.8448 23.769 17.0048 23.7029C17.1647 23.6369 17.3099 23.5401 17.4319 23.4181L22.8 18.0835C24.0468 16.8481 24.8961 15.2739 25.2403 13.56C25.5845 11.8461 25.4083 10.0695 24.7339 8.45489C24.0596 6.84029 22.9173 5.46022 21.4517 4.48924C19.986 3.51826 18.2628 3 16.5 3C14.7372 3 13.014 3.51826 11.5483 4.48924C10.0827 5.46022 8.94044 6.84029 8.26606 8.45489C7.59167 10.0695 7.41546 11.8461 7.75971 13.56C8.10395 15.2739 8.95319 16.8481 10.2 18.0835L15.5681 23.4181ZM10.2394 11.2265C10.3291 10.2988 10.6266 9.40264 11.1103 8.60351C11.5939 7.80438 12.2515 7.12242 13.035 6.60742C14.0643 5.93746 15.2687 5.58051 16.5 5.58051C17.7313 5.58051 18.9357 5.93746 19.965 6.60742C20.7433 7.12065 21.3971 7.79848 21.8796 8.59215C22.362 9.38583 22.6611 10.2756 22.7552 11.1976C22.8493 12.1195 22.7362 13.0506 22.424 13.924C22.1117 14.7975 21.6081 15.5914 20.9494 16.2488L16.5 20.6597L12.0506 16.2488C11.3911 15.5978 10.8863 14.8092 10.573 13.9404C10.2597 13.0716 10.1457 12.1444 10.2394 11.2265ZM25.6875 26.3977C18.5116 26.3977 14.4884 26.3977 7.3125 26.3977C6.9644 26.3977 6.63056 26.5348 6.38442 26.7788C6.13828 27.0228 6 27.3538 6 27.6989C6 28.0439 6.13828 28.3749 6.38442 28.6189C6.63056 28.8629 6.9644 29 7.3125 29H16.5H25.6875C26.0356 29 26.3694 28.8629 26.6156 28.6189C26.8617 28.3749 27 28.0439 27 27.6989C27 27.3538 26.8617 27.0228 26.6156 26.7788C26.3694 26.5348 26.0356 26.3977 25.6875 26.3977Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLocationPinAlt32;
