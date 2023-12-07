import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconKafkaAvro24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.02628 3.97957C4.02628 3.40421 4.4874 2.95 5.04122 2.95C5.59503 2.95 6.05616 3.40421 6.05616 3.97957C6.05616 4.55493 5.59503 5.00913 5.04122 5.00913C4.4874 5.00913 4.02628 4.55493 4.02628 3.97957ZM5.04122 1C3.39701 1 2.07628 2.34074 2.07628 3.97957C2.07628 5.26928 2.89425 6.37439 4.04413 6.78669V8.06167C2.28928 8.50914 0.996094 10.1064 0.996094 12.0004C0.996094 13.8944 2.28928 15.4916 4.04413 15.9391V17.2115C2.89425 17.6238 2.07628 18.7289 2.07628 20.0186C2.07628 21.6575 3.39701 22.9982 5.04122 22.9982C6.68543 22.9982 8.00616 21.6575 8.00616 20.0186C8.00616 18.7311 7.19095 17.6275 6.04413 17.2136V15.9394C6.75358 15.7587 7.38761 15.3901 7.89131 14.8899L9.04156 15.5851C9.02567 15.7105 9.01748 15.8383 9.01748 15.9678C9.01748 17.6203 10.3492 18.9724 12.0074 18.9724C13.6656 18.9724 14.9974 17.6203 14.9974 15.9678C14.9974 14.3154 13.6656 12.9633 12.0074 12.9633C11.2052 12.9633 10.4794 13.2797 9.94386 13.7935L8.92121 13.1754C9.03308 12.8032 9.09319 12.4087 9.09319 12.0004C9.09319 11.5919 9.03304 11.1973 8.92108 10.8249L10.5335 9.85035L9.49901 8.13871L7.89101 9.1106C7.38736 8.61058 6.75344 8.24208 6.04413 8.06141V6.78459C7.19095 6.37066 8.00616 5.26711 8.00616 3.97957C8.00616 2.34074 6.68543 1 5.04122 1ZM3.12337 12.0004C3.12337 10.9259 3.9886 10.064 5.04464 10.064C6.10068 10.064 6.96591 10.9259 6.96591 12.0004C6.96591 13.0749 6.10068 13.9368 5.04464 13.9368C3.9886 13.9368 3.12337 13.0749 3.12337 12.0004ZM5.04122 18.9891C4.4874 18.9891 4.02628 19.4433 4.02628 20.0186C4.02628 20.594 4.4874 21.0482 5.04122 21.0482C5.59503 21.0482 6.05616 20.594 6.05616 20.0186C6.05616 19.4433 5.59503 18.9891 5.04122 18.9891ZM11.0175 15.9678C11.0175 15.4061 11.4676 14.9633 12.0074 14.9633C12.5473 14.9633 12.9974 15.4061 12.9974 15.9678C12.9974 16.5296 12.5473 16.9724 12.0074 16.9724C11.4676 16.9724 11.0175 16.5296 11.0175 15.9678Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 16C21.4183 16 25 12.4183 25 8C25 3.58172 21.4183 0 17 0C12.5817 0 9 3.58172 9 8C9 12.4183 12.5817 16 17 16ZM15.5089 3.12894C15.6607 2.74911 16.0285 2.5 16.4375 2.5H17.6074C18.0165 2.5 18.3843 2.74911 18.536 3.12894L22.0458 11.9124L20.1886 12.6545L19.3675 10.5996L14.6775 10.5996L13.8563 12.6545L11.9991 11.9124L15.5089 3.12894ZM17.0225 4.73105L18.5683 8.59961H15.4766L17.0225 4.73105Z"
        fill="#0FD1FF"
      />
    </svg>
  );
};

export default IconKafkaAvro24;
