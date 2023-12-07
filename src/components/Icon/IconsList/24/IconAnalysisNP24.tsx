import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAnalusisNP24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M0.964844 12.623H3.68945V15.6211C3.68945 17.252 4.72461 18.2188 6.66797 18.5605L11.2578 19.3613V22.7891C11.2578 23.2676 11.5312 23.5605 12 23.5605C12.4492 23.5605 12.7324 23.2676 12.7324 22.7891V19.625L17.3223 20.4258C19.1875 20.7578 20.3008 19.5859 20.3008 17.4961V12.623H23.0254C23.5137 12.623 23.8066 12.3398 23.8066 11.8906C23.8066 11.4219 23.5137 11.1484 23.0254 11.1484H20.3008V6.28516C20.3008 4.08789 19.2656 3.00391 17.3223 3.3457L12.7324 4.15625V0.992188C12.7324 0.503906 12.4492 0.210938 12 0.210938C11.5312 0.210938 11.2578 0.503906 11.2578 0.992188V4.41016L6.66797 5.2207C4.72461 5.5625 3.68945 6.50977 3.68945 8.15039V11.1484H0.964844C0.476562 11.1484 0.183594 11.4219 0.183594 11.8906C0.183594 12.3398 0.476562 12.623 0.964844 12.623ZM17.4004 4.82031C18.3281 4.66406 18.8262 5.18164 18.8262 6.26562V11.1484H12.7324V5.62109L17.4004 4.82031ZM5.16406 8.13086C5.16406 7.31055 5.66211 6.8418 6.58984 6.68555L11.2578 5.875V11.1484H5.16406V8.13086ZM6.58984 17.0859C5.66211 16.9297 5.16406 16.4609 5.16406 15.6406V12.623H11.2578V17.8965L6.58984 17.0859ZM17.4004 18.9609L12.7324 18.1504V12.623H18.8262V17.5156C18.8262 18.5508 18.2988 19.1074 17.4004 18.9609Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAnalusisNP24;
