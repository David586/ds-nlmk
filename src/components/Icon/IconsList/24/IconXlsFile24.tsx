import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconXlsFile24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M15.7028 0H6.06343C4.65521 0 3.50902 1.14694 3.50902 2.55436V12H3.25949C2.69112 12 2.23022 12.4604 2.23022 13.0293V19.2717C2.23022 19.8405 2.69112 20.3009 3.25949 20.3009H3.50902V21.4456C3.50902 22.8546 4.65516 24 6.06343 24H19.2158C20.6233 24 21.7695 22.8545 21.7695 21.4456V6.0455L15.7028 0ZM4.85054 14.0985H5.97433L6.35324 14.8885C6.48187 15.1514 6.57844 15.364 6.68118 15.6079H6.69372C6.79647 15.3318 6.88009 15.1388 6.98951 14.8885L7.35552 14.0985H8.47304L7.25268 16.2112L8.5373 18.4275H7.40684L7.01499 17.6437C6.85456 17.3417 6.75181 17.1173 6.62936 16.8663H6.61682C6.52657 17.1173 6.4176 17.3417 6.28261 17.6437L5.92286 18.4275H4.80534L6.05786 16.2371L4.85054 14.0985ZM19.2158 22.4356H6.06343C5.51812 22.4356 5.07415 21.9916 5.07415 21.4456V20.3009H17.335C17.9033 20.3009 18.3643 19.8405 18.3643 19.2717V13.0293C18.3643 12.4604 17.9033 12 17.335 12H5.07415V2.55436C5.07415 2.00989 5.51817 1.56587 6.06343 1.56587L15.1176 1.55641V4.90314C15.1176 5.88068 15.9107 6.67459 16.8889 6.67459L20.1675 6.66518L20.2043 21.4455C20.2044 21.9916 19.7611 22.4356 19.2158 22.4356ZM11.7704 17.6054V18.4276H9.06615V14.0986H10.0488V17.6054H11.7704ZM13.4292 16.6098C12.7099 16.3596 12.2407 15.9611 12.2407 15.3318C12.2407 14.5927 12.8573 14.028 13.8788 14.028C14.3671 14.028 14.7264 14.1307 14.9838 14.2461L14.7652 15.0361C14.5919 14.9529 14.2835 14.8305 13.8595 14.8305C13.4355 14.8305 13.23 15.0236 13.23 15.248C13.23 15.5241 13.4739 15.6465 14.0329 15.8582C14.7974 16.1407 15.1571 16.5393 15.1571 17.1496C15.1571 17.8753 14.5982 18.492 13.41 18.492C12.9153 18.492 12.427 18.3633 12.183 18.2283L12.3823 17.4194C12.6455 17.5544 13.0503 17.6886 13.4676 17.6886C13.9172 17.6886 14.1549 17.5026 14.1549 17.2201C14.1549 16.9503 13.9494 16.7957 13.4292 16.6098Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconXlsFile24;
