import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInProcessOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.255 8.006c-.457.491-1.255 1.384-1.668 1.83a.485.485 0 0 1-.676-.003 97.443 97.443 0 0 1-1.664-1.825c-.185-.207 0-.508.255-.508h.581c0-1.816-1.12-2.846-1.716-3.273-.193-.138-.168-.41-.032-.563.219-.244.832-.247.832-.247s-.092-.94.25-1a.61.61 0 0 1 .456.091c1.544 1.145 2.544 2.915 2.544 4.992h.585c.256 0 .418.328.253.506ZM14 8a.222.222 0 0 1-.25-.247V7.5c0-1.693-.742-3.14-1.919-4.167-.081-.07-.081.084-.081.084V4h-.5s-.185-.01-.086.074A4.45 4.45 0 0 1 12.75 7.5v.249c0 .17-.085.25-.248.25h-.335l1.083 1.168L14.333 8H14ZM8.008 4.747c-.207.185-.507 0-.507-.256V3.91c-1.813 0-2.842 1.123-3.268 1.72-.138.192-.41.167-.562.031-.244-.218-.248-.832-.248-.832s-.937.092-.999-.25a.613.613 0 0 1 .092-.458C3.66 2.573 5.427 1.572 7.501 1.572V.986c0-.257.327-.42.505-.254.491.458 1.382 1.257 1.827 1.671a.487.487 0 0 1-.003.677 98.72 98.72 0 0 1-1.822 1.667ZM8 1.655v.334a.222.222 0 0 1-.247.25h-.252c-1.69 0-3.135.743-4.162 1.923-.07.081.084.081.084.081h.582v.501s-.01.185.074.087a4.44 4.44 0 0 1 3.422-1.59h.248c.17 0 .251.086.251.25v.335L9.165 2.74 8 1.655ZM3.089 6.167c.428.45 1.218 1.323 1.664 1.825.185.207 0 .508-.255.508h-.581c0 1.815 1.12 2.846 1.716 3.273.193.137.168.41.032.562-.219.245-.832.248-.832.248s.092.939-.25 1a.61.61 0 0 1-.456-.091C2.583 12.347 1.583 10.576 1.583 8.5H.998c-.256 0-.418-.328-.253-.506.457-.492 1.255-1.385 1.668-1.83a.485.485 0 0 1 .676.003ZM1.667 8H2a.222.222 0 0 1 .25.247V8.5c0 1.692.742 3.14 1.919 4.167.081.07.081-.084.081-.084V12h.5s.185.01.086-.074A4.453 4.453 0 0 1 3.25 8.5v-.25c0-.17.085-.251.248-.251h.335L2.75 6.833 1.667 8Zm6.325 3.253c.207-.185.507 0 .507.256v.582c1.813 0 2.842-1.123 3.268-1.72.138-.193.41-.167.562-.032.244.219.248.833.248.833s.937-.092.998.25a.613.613 0 0 1-.09.457c-1.144 1.547-2.912 2.549-4.986 2.549v.586c0 .257-.327.418-.505.253-.492-.457-1.383-1.257-1.827-1.67a.487.487 0 0 1 .003-.678c.45-.427 1.321-1.22 1.822-1.666ZM8 14.344v-.334a.222.222 0 0 1 .247-.25h.252c1.69 0 3.135-.742 4.162-1.922.07-.081-.084-.081-.084-.081h-.582v-.501s.01-.185-.074-.087a4.439 4.439 0 0 1-3.422 1.59h-.248c-.17 0-.251-.086-.251-.25v-.335l-1.165 1.085L8 14.344Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInProcessOutlined16;