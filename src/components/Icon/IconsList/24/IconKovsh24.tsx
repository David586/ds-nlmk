import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconKovsh24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.96274 5H2.07715V3H8.18339V5H5.96274V18.0033C5.96274 19.1072 6.85579 20 7.96107 20H16.6461C17.7501 20 18.6449 19.1051 18.6449 18V5H12.5771V3H22.0771V5H20.6449V18C20.6449 20.2087 18.8557 22 16.6461 22H7.96107C5.75264 22 3.96274 20.2131 3.96274 18.0033V5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0771 1.5H13.0771V9.10135C13.8716 9.26963 14.5383 9.64065 15.045 10.1632C15.7407 10.8806 16.0771 11.8246 16.0771 12.75C16.0771 13.6754 15.7407 14.6194 15.045 15.3368C14.338 16.0659 13.3196 16.5 12.0771 16.5C10.6213 16.5 9.61527 15.5841 8.99067 14.8207C8.66944 14.4281 8.40814 14.0256 8.21181 13.7194C8.19571 13.6942 8.18023 13.6701 8.16532 13.6468C8.08481 13.521 8.02064 13.4208 7.96237 13.3352C7.90728 13.2542 7.87861 13.2184 7.8707 13.2085C7.86784 13.205 7.8677 13.2048 7.87002 13.2071L9.28424 11.7929C9.41795 11.9266 9.53255 12.0876 9.61571 12.2098C9.69139 12.3209 9.77375 12.4497 9.85337 12.5741C9.86754 12.5963 9.88163 12.6183 9.89557 12.64C10.0899 12.9431 10.2973 13.2594 10.5386 13.5543C11.039 14.1659 11.533 14.5 12.0771 14.5C12.8347 14.5 13.3163 14.2466 13.6092 13.9445C13.9136 13.6306 14.0771 13.1996 14.0771 12.75C14.0771 12.3004 13.9136 11.8694 13.6092 11.5555C13.3163 11.2534 12.8347 11 12.0771 11H11.0771V1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKovsh24;
