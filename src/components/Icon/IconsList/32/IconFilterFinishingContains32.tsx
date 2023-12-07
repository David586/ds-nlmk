import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterFinishingContains32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1999 5H27.9999V26.6H11.1999V5ZM8.93081 20.3217C8.83268 20.1304 8.76154 19.8924 8.71739 19.6078C8.20223 20.1819 7.53252 20.4689 6.70826 20.4689C5.92817 20.4689 5.28054 20.2432 4.76538 19.7918C4.25513 19.3405 4 18.7713 4 18.0844C4 17.2406 4.31155 16.5929 4.93465 16.1416C5.56265 15.6902 6.46786 15.462 7.65027 15.4571H8.62907V15.0009C8.62907 14.6329 8.5334 14.3385 8.34205 14.1177C8.15562 13.8969 7.85879 13.7866 7.45157 13.7866C7.09341 13.7866 6.8113 13.8724 6.60523 14.0441C6.40408 14.2158 6.3035 14.4514 6.3035 14.7506H4.17663C4.17663 14.2894 4.31891 13.8626 4.60347 13.4701C4.88804 13.0776 5.29035 12.771 5.81042 12.5502C6.33048 12.3245 6.91433 12.2116 7.56196 12.2116C8.54321 12.2116 9.32086 12.4594 9.89489 12.9549C10.4738 13.4456 10.7633 14.1373 10.7633 15.0303V18.4819C10.7682 19.2374 10.8737 19.809 11.0798 20.1966V20.3217H8.93081ZM7.17191 18.8425C7.48591 18.8425 7.77538 18.7738 8.04032 18.6364C8.30526 18.4941 8.50151 18.3052 8.62907 18.0697V16.7009H7.83426C6.76959 16.7009 6.20292 17.0688 6.13423 17.8048L6.12687 17.9299C6.12687 18.1948 6.22009 18.4132 6.40653 18.5849C6.59297 18.7566 6.84809 18.8425 7.17191 18.8425ZM18.9819 19.4016C19.5265 18.6853 19.7988 17.6893 19.7988 16.4137V16.2959C19.7988 15.0006 19.5216 13.9973 18.9671 13.2859C18.4176 12.5696 17.6572 12.2114 16.6857 12.2114C15.886 12.2114 15.2408 12.4984 14.7502 13.0725V9.01744H12.6233V20.3215H14.5368L14.6324 19.4752C15.1476 20.1375 15.8369 20.4687 16.7004 20.4687C17.6768 20.4687 18.4373 20.113 18.9819 19.4016ZM17.2892 14.5002C17.5443 14.8682 17.6719 15.4545 17.6719 16.2591C17.6719 16.9215 17.6204 17.4145 17.5173 17.7383C17.3015 18.4154 16.8501 18.7539 16.1632 18.7539C15.4812 18.7539 15.0102 18.4743 14.7502 17.915V14.7725C15.0053 14.2181 15.4714 13.9409 16.1485 13.9409C16.6538 13.9409 17.0341 14.1273 17.2892 14.5002ZM25.6106 18.4301C25.3653 18.646 25.0464 18.7539 24.6539 18.7539C24.1437 18.7539 23.7634 18.5749 23.5132 18.2167C23.263 17.8586 23.1379 17.2698 23.1379 16.4504V16.2297C23.1379 15.4201 23.263 14.8363 23.5132 14.4781C23.7683 14.1151 24.1437 13.9335 24.6392 13.9335C25.0415 13.9335 25.3653 14.0635 25.6106 14.3236C25.8559 14.5787 25.9835 14.9123 25.9933 15.3245H27.9877C27.9779 14.3825 27.6713 13.6293 27.0678 13.0651C26.4692 12.496 25.672 12.2114 24.676 12.2114C23.5377 12.2114 22.6423 12.5769 21.9898 13.308C21.3373 14.039 21.011 15.0178 21.011 16.2444V16.3842C21.011 17.6598 21.3397 18.6607 21.9972 19.3869C22.6546 20.1081 23.5525 20.4687 24.6907 20.4687C25.2991 20.4687 25.8535 20.346 26.3539 20.1007C26.8593 19.8505 27.2567 19.5022 27.5462 19.0557C27.8356 18.6043 27.9828 18.1088 27.9877 17.5691H25.9933C25.9835 17.9272 25.8559 18.2143 25.6106 18.4301Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterFinishingContains32;
