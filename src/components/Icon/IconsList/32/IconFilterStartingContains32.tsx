import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterStartingContains32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.03348 5H20.7059V26.4359H4.03348V18.4192C4.11791 18.9237 4.36201 19.3546 4.76577 19.7118C5.2812 20.1634 5.92916 20.3892 6.70966 20.3892C7.53434 20.3892 8.20439 20.102 8.71981 19.5277C8.76399 19.8124 8.83517 20.0505 8.93334 20.2419H11.0834V20.1168C10.8772 19.729 10.7717 19.1571 10.7668 18.4011V14.9478C10.7668 14.0544 10.4772 13.3623 9.89792 12.8714C9.32359 12.3756 8.54555 12.1277 7.56379 12.1277C6.91583 12.1277 6.33168 12.2406 5.81135 12.4664C5.29101 12.6873 4.88849 12.9941 4.60378 13.3868C4.31907 13.7795 4.17672 14.2066 4.17672 14.668H6.30468C6.30468 14.3686 6.40531 14.1329 6.60657 13.9611C6.81274 13.7893 7.095 13.7034 7.45334 13.7034C7.86077 13.7034 8.15775 13.8139 8.34429 14.0348C8.53573 14.2557 8.63145 14.5502 8.63145 14.9183V15.3749H7.65215C6.46913 15.3798 5.56345 15.608 4.93513 16.0596C4.42967 16.4258 4.12912 16.921 4.03348 17.5453V5ZM4.03348 17.5453C4.01116 17.691 4 17.8438 4 18.0035C4 18.1472 4.01116 18.2858 4.03348 18.4192V17.5453ZM24.6646 18.6736C25.0573 18.6736 25.3764 18.5656 25.6218 18.3496C25.8672 18.1336 25.9949 17.8465 26.0047 17.4881H28.0001C27.9952 18.0281 27.8479 18.5239 27.5583 18.9755C27.2687 19.4222 26.8711 19.7707 26.3655 20.0211C25.8648 20.2665 25.3101 20.3892 24.7014 20.3892C23.5626 20.3892 22.6643 20.0284 22.0065 19.3068C21.3487 18.5803 21.0198 17.5789 21.0198 16.3027V16.1628C21.0198 14.9356 21.3462 13.9562 21.9991 13.2248C22.652 12.4934 23.5478 12.1277 24.6867 12.1277C25.6832 12.1277 26.4809 12.4124 27.0797 12.9819C27.6835 13.5464 27.9903 14.2999 28.0001 15.2424H26.0047C25.9949 14.83 25.8672 14.4962 25.6218 14.241C25.3764 13.9808 25.0524 13.8507 24.6499 13.8507C24.1541 13.8507 23.7786 14.0323 23.5233 14.3956C23.2729 14.7539 23.1478 15.3381 23.1478 16.148V16.3689C23.1478 17.1887 23.2729 17.7778 23.5233 18.1361C23.7736 18.4944 24.1541 18.6736 24.6646 18.6736ZM18.9894 19.3215C19.5343 18.6048 19.8067 17.6084 19.8067 16.3321V16.2143C19.8067 14.9183 19.5294 13.9145 18.9747 13.2027C18.4249 12.486 17.664 12.1277 16.6921 12.1277C15.892 12.1277 15.2465 12.4149 14.7556 12.9892V8.93206H12.6276V20.2419H14.542L14.6378 19.3952C15.1532 20.0579 15.8429 20.3892 16.7068 20.3892C17.6837 20.3892 18.4445 20.0333 18.9894 19.3215ZM17.2959 14.4176C17.5511 14.7858 17.6788 15.3724 17.6788 16.1774C17.6788 16.8401 17.6272 17.3335 17.5241 17.6574C17.3081 18.3349 16.8565 18.6736 16.1693 18.6736C15.487 18.6736 15.0157 18.3938 14.7556 17.8342V14.6901C15.0108 14.1354 15.4772 13.858 16.1546 13.858C16.6602 13.858 17.0406 14.0446 17.2959 14.4176ZM8.0424 18.5558C7.77732 18.6932 7.4877 18.7619 7.17354 18.7619C6.84956 18.7619 6.5943 18.676 6.40777 18.5042C6.22123 18.3324 6.12796 18.114 6.12796 17.8489L6.13533 17.7237C6.20405 16.9874 6.77102 16.6192 7.83623 16.6192H8.63145V17.9888C8.50382 18.2244 8.30747 18.4134 8.0424 18.5558Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterStartingContains32;
