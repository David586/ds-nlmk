import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconQualityFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16 2C9.93459 2 5 6.95179 5 13.0385C5 16.8317 6.91677 20.184 9.82925 22.1719V29.1923C9.82925 29.4664 9.96773 29.7217 10.1971 29.8705C10.4264 30.0193 10.7153 30.0412 10.9644 29.9288L16 27.6549L21.0356 29.9289C21.141 29.9764 21.2536 30 21.3658 30C21.5186 30 21.6706 29.9564 21.8029 29.8706C22.0322 29.7217 22.1707 29.4664 22.1707 29.1923V22.1719C25.0832 20.1841 27 16.8318 27 13.0385C27 6.95179 22.0654 2 16 2ZM19.0643 21.9458C19.0322 21.9569 19.0001 21.9681 18.9679 21.9789C18.919 21.9953 18.8698 22.0114 18.8205 22.027C18.7631 22.0451 18.7056 22.0625 18.6478 22.0795C18.6071 22.0915 18.5664 22.1035 18.5254 22.115C18.4491 22.1364 18.3725 22.1568 18.2956 22.1762C18.2669 22.1835 18.2381 22.1904 18.2094 22.1974C18.1342 22.2157 18.0586 22.2331 17.9828 22.2495C17.9637 22.2536 17.9448 22.258 17.9258 22.2619C17.828 22.2824 17.7299 22.3015 17.6314 22.3189C17.6214 22.3206 17.6113 22.3221 17.6012 22.324C17.5125 22.3393 17.4235 22.3533 17.3344 22.366C17.3142 22.3689 17.2941 22.3717 17.2739 22.3745C17.1788 22.3875 17.0836 22.3994 16.988 22.4095C16.9844 22.4099 16.9808 22.4104 16.9772 22.4107C16.8771 22.4212 16.7767 22.4298 16.6761 22.4369C16.6543 22.4385 16.6324 22.4397 16.6106 22.4411C16.5324 22.4462 16.4542 22.4502 16.3758 22.4534C16.3491 22.4545 16.3225 22.4556 16.2958 22.4565C16.1973 22.4595 16.0987 22.4615 16 22.4615C15.9013 22.4615 15.8027 22.4595 15.7042 22.4564C15.6775 22.4555 15.6508 22.4544 15.6242 22.4533C15.5458 22.4502 15.4676 22.4461 15.3894 22.441C15.3676 22.4396 15.3457 22.4384 15.3239 22.4368C15.2233 22.4296 15.1229 22.421 15.0228 22.4106C15.0192 22.4103 15.0156 22.4098 15.012 22.4094C14.9164 22.3993 14.8212 22.3874 14.7261 22.3744C14.706 22.3717 14.6859 22.3689 14.6657 22.3659C14.5765 22.3531 14.4875 22.3392 14.3988 22.3238C14.3887 22.3221 14.3787 22.3206 14.3686 22.3188C14.2701 22.3014 14.172 22.2823 14.0742 22.2618C14.0552 22.2578 14.0363 22.2534 14.0172 22.2494C13.9414 22.233 13.8658 22.2156 13.7906 22.1973C13.7618 22.1903 13.733 22.1834 13.7044 22.1761C13.6275 22.1568 13.5509 22.1362 13.4746 22.1149C13.4336 22.1034 13.3929 22.0914 13.3522 22.0794C13.2945 22.0624 13.2369 22.045 13.1795 22.0269C13.1301 22.0112 13.081 21.9952 13.032 21.9788C12.9998 21.968 12.9677 21.9568 12.9356 21.9457C9.25796 20.6682 6.60973 17.158 6.60973 13.0385C6.60973 7.84259 10.8222 3.61536 16 3.61536C21.1778 3.61536 25.3903 7.84254 25.3903 13.0385C25.3903 17.158 22.742 20.6682 19.0643 21.9458Z"
        fill="currentColor"
      />
      <path
        d="M20.7751 13.0385L22.2869 10.187C22.4174 9.94112 22.4122 9.64509 22.2734 9.40387C22.1346 9.16264 21.8817 9.01012 21.6043 9.00049L18.3876 8.88866L16.6827 6.14914C16.5356 5.91289 16.2776 5.76928 16 5.76928C15.7224 5.76928 15.4644 5.91289 15.3173 6.14914L13.6125 8.88866L10.3958 9.00049C10.1184 9.01012 9.86544 9.16264 9.72663 9.40387C9.58783 9.64509 9.58265 9.94112 9.71312 10.187L11.2249 13.0385L9.71312 15.8899C9.58265 16.1358 9.58783 16.4318 9.72663 16.673C9.86544 16.9143 10.1184 17.0668 10.3958 17.0764L13.6125 17.1882L15.3173 19.9278C15.4643 20.164 15.7224 20.3076 16 20.3076C16.2776 20.3076 16.5356 20.164 16.6827 19.9278L18.3875 17.1882L21.6042 17.0764C21.8816 17.0668 22.1346 16.9143 22.2734 16.673C22.4122 16.4318 22.4173 16.1358 22.2869 15.8899L20.7751 13.0385Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconQualityFilled32;
