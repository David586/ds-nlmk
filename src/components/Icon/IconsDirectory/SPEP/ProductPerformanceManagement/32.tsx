import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProductPerformanceManagement32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M23.709 21.006c.476.08.916.306 1.258.647L28.315 25A2.343 2.343 0 0 1 25 28.314l-3.347-3.347a2.34 2.34 0 0 1-.456-2.666l-.592-.591a6.63 6.63 0 0 1-10.545-3.574 6.633 6.633 0 0 1 2.56-7.013l-1.798-3.235-.064.008a.861.861 0 0 1-.117.01 1.91 1.91 0 0 1-.205-.02l-2.92 5.11a1.935 1.935 0 0 1 .061 2.246 1.954 1.954 0 1 1-1.624-3.039c.069.004.137.01.205.021l2.92-5.111a1.935 1.935 0 0 1 .182-2.54 1.953 1.953 0 0 1 3.334 1.38 1.94 1.94 0 0 1-.405 1.178l1.793 3.228a6.614 6.614 0 0 1 7.887 2.248.752.752 0 0 1 .062.072c.006.008.01.017.015.026a6.606 6.606 0 0 1-.236 7.9l.597.597a2.34 2.34 0 0 1 1.402-.197Zm-5.226-9.179a5.059 5.059 0 0 0-1.983-.405 5.042 5.042 0 0 0-1.75.318l.87 1.568.002.003.49.88a2.295 2.295 0 0 1 1.743.4l2.294-1.614a5.057 5.057 0 0 0-1.666-1.15Zm-2.64 5.092-.008-.016-.002-.003.009.017.014.024c-.005-.007-.008-.014-.012-.022Zm.08.102a.155.155 0 0 0-.01-.015l-.012-.012a.197.197 0 0 1-.014-.016l.004.005a.708.708 0 0 0 .032.038Zm.05.052-.004-.004a.069.069 0 0 0-.008-.006.059.059 0 0 1-.009-.007.101.101 0 0 0 .01.009l.01.008Zm.104.079a.64.64 0 0 0-.028-.02c-.008-.005-.017-.01-.025-.017a.793.793 0 0 0 .068.048l-.015-.011Zm.181.086a.794.794 0 0 1 .01.004.021.021 0 0 1-.01-.004Zm.545-.024a.947.947 0 0 0-.048.021.772.772 0 0 0 .096-.04c-.016.008-.032.013-.048.02Zm.131-.067-.009.004c-.006.004-.012.01-.018.013l.015-.008a.255.255 0 0 0 .012-.009Zm-4.995-2.874a5.068 5.068 0 0 0 1.402 6.205 5.077 5.077 0 0 0 7.707-6.223l-2.293 1.614a2.345 2.345 0 1 1-4.01-.918l-.49-.884-.277-.498-.594-1.07a5.068 5.068 0 0 0-1.444 1.774ZM26.657 27.43a.8.8 0 0 0 .552-.22.781.781 0 0 0 0-1.105l-3.347-3.347a.781.781 0 0 0-1.104 1.105l3.347 3.346a.8.8 0 0 0 .552.221Zm-2.68-15.236a.777.777 0 0 1-.91-.008.782.782 0 0 1 .01-1.27l2.057-1.447a1.953 1.953 0 1 1 1.913 1.562 1.933 1.933 0 0 1-1.008-.288l-2.062 1.451Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconProductPerformanceManagement32;
