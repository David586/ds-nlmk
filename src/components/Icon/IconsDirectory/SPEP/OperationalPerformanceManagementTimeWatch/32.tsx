import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOperationalPerformanceManagementTimeWatch32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.79 11.47-.014.011a9.474 9.474 0 0 1-.028 12.221 9.376 9.376 0 0 1-3.533 2.58 9.328 9.328 0 0 1-8.47-.66 9.398 9.398 0 0 1-3.096-3.098 9.46 9.46 0 0 1-1.364-4.172H6.344a.779.779 0 0 1-.551-.231.788.788 0 0 1 .55-1.34h3.943a9.442 9.442 0 0 1 .317-1.785.785.785 0 0 1 .965-.543.78.78 0 0 1 .563.665.789.789 0 0 1-.024.306 7.855 7.855 0 0 0-.251 1.357h1.519a.78.78 0 0 1 .779.785.788.788 0 0 1-.228.555.779.779 0 0 1-.551.23h-1.523a7.873 7.873 0 0 0 2.093 4.61 7.774 7.774 0 0 0 9.422 1.5 7.837 7.837 0 0 0 3.407-3.733 7.893 7.893 0 0 0 .43-5.048 7.858 7.858 0 0 0-2.724-4.262 7.782 7.782 0 0 0-9.538-.136h.777a.788.788 0 0 1 0 1.571h-5.47a.78.78 0 0 1-.78-.785.788.788 0 0 1 .78-.786h2.394a9.323 9.323 0 0 1 6.204-3.106.206.206 0 0 0-.002-.016.13.13 0 0 1-.001-.02V5.783a.788.788 0 0 1 .78-.783.78.78 0 0 1 .782.783V8.14c0 .006 0 .013-.002.02l-.001.015a9.305 9.305 0 0 1 5.274 2.2.208.208 0 0 0 .01-.013l.013-.015 1.185-1.191a.78.78 0 0 1 1.333.555.788.788 0 0 1-.228.556l-1.185 1.19a.142.142 0 0 1-.015.013Zm-19.665.598a.788.788 0 0 0-.229-.556.78.78 0 0 0-.552-.23H4.78a.78.78 0 0 0-.552.23.788.788 0 0 0 .552 1.342h1.563a.78.78 0 0 0 .552-.23.788.788 0 0 0 .229-.556Zm11.948-.556a.78.78 0 0 1 1.333.556v3.701a1.968 1.968 0 0 1 0 3.595v.559a.791.791 0 0 1-.482.728.778.778 0 0 1-1.021-.427.79.79 0 0 1-.06-.301v-.56a1.967 1.967 0 0 1 0-3.595v-3.7c0-.209.083-.408.23-.556ZM7.906 22.28H9.47a.778.778 0 0 1 .724.485.791.791 0 0 1-.17.857.78.78 0 0 1-.554.23H7.906a.776.776 0 0 1-.723-.485.79.79 0 0 1 .424-1.028.778.778 0 0 1 .3-.059Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOperationalPerformanceManagementTimeWatch32;
