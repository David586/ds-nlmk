import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeglassesOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.073 14.32a2.569 2.569 0 0 1-2.564-2.565 2.57 2.57 0 0 1 2.564-2.564 2.57 2.57 0 0 1 2.564 2.564 2.569 2.569 0 0 1-2.564 2.564Zm0-4.734c-1.2 0-2.17.97-2.17 2.17 0 1.199.97 2.169 2.17 2.169s2.17-.97 2.17-2.17c0-1.199-.97-2.17-2.17-2.17Zm9.759 4.718a2.57 2.57 0 0 1-2.564-2.564 2.57 2.57 0 0 1 2.564-2.564 2.57 2.57 0 0 1 2.564 2.564 2.57 2.57 0 0 1-2.564 2.564Zm0-4.734a2.17 2.17 0 1 0 2.17 2.17c0-1.2-.97-2.17-2.17-2.17Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.935 15.503a4.024 4.024 0 0 1-2.84-1.2c-.703-.701-1.081-1.609-1.065-2.556 0-.228-.071-.552-.292-.773-.174-.173-.426-.268-.734-.268-1.002 0-1.026.931-1.026 1.042 0 2.035-1.79 3.747-3.905 3.747a3.75 3.75 0 0 1-3.613-2.753c-.016-.064-.032-.158-.048-.245h-.576c-.473 0-.836-.308-.836-.71v-.079c0-.402.363-.726.836-.726h.576C3.822 9.27 5.361 8 7.065 8c1.35 0 2.596.734 3.258 1.893.284-.284.868-.725 1.657-.725h.04c.789 0 1.365.45 1.657.725A3.766 3.766 0 0 1 16.934 8c1.704 0 3.25 1.27 3.653 2.982h.576c.465 0 .836.316.836.726v.079c0 .402-.363.71-.836.71h-.576c-.016.087-.032.181-.048.245a3.75 3.75 0 0 1-3.613 2.753l.008.008Zm-4.931-5.184c.418 0 .765.127 1.018.387.378.387.41.907.402 1.05-.008.836.331 1.64.955 2.272a3.623 3.623 0 0 0 2.556 1.08 3.361 3.361 0 0 0 3.235-2.461c.015-.071.04-.181.055-.276l.047-.26h.908c.22 0 .441-.111.441-.316v-.079c0-.19-.189-.331-.441-.331h-.9l-.032-.158c-.307-1.61-1.727-2.825-3.305-2.825a3.376 3.376 0 0 0-3.038 1.925l-.142.292-.197-.26s-.615-.797-1.538-.797h-.04c-.923 0-1.538.79-1.538.797l-.197.26-.143-.292a3.376 3.376 0 0 0-3.037-1.925c-1.57 0-2.99 1.215-3.306 2.825l-.031.158h-.9c-.244 0-.442.142-.442.331v.079c0 .205.221.316.442.316h.908l.047.26c.016.095.031.197.055.276a3.354 3.354 0 0 0 3.235 2.461c1.901 0 3.51-1.538 3.51-3.353 0-.497.3-1.436 1.42-1.436h-.007Z"
      />
    </svg>
  );
};

export default IconEyeglassesOutlined24;
