import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconIndustry32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16456 3.12903C4.04949 3.24632 4.03797 3.34406 4.03797 4.20555C4.03797 5.06135 4.05013 5.16613 4.16342 5.2891C4.28861 5.4249 4.28797 5.44452 3.90987 13.6481C3.70139 18.1706 3.51449 22.0525 3.49456 22.2742L3.45829 22.6774H3.2212C3.05633 22.6774 2.94285 22.7222 2.84873 22.8243C2.72304 22.9606 2.70861 23.0786 2.64563 24.4855C2.60829 25.3185 2.56285 26.1234 2.54449 26.2742L2.5112 26.5484H1.89323C1.32905 26.5484 1.26323 26.5614 1.13759 26.6977C1.00937 26.8368 1 26.9108 1 27.7832C1 28.6785 1.00639 28.7256 1.14646 28.8597L1.29297 29H16.0089H30.7247L30.8624 28.8507C30.9906 28.7115 31 28.6376 31 27.7652C31 26.8699 30.9936 26.8228 30.8535 26.6886C30.7239 26.5646 30.6363 26.5484 30.0938 26.5484H29.4805L29.4966 18.5323L29.5127 10.5163L29.9241 10.4682C30.8034 10.3655 31 10.2681 31 9.93548C31 9.67155 30.792 9.51555 30.4462 9.52013C30.2808 9.52232 28.2089 9.76368 25.8418 10.0564C22.0391 10.5266 21.533 10.5769 21.4958 10.4879C21.4727 10.4325 21.4058 9.27748 21.3473 7.92136L21.2409 5.45561L21.3736 5.28361C21.4937 5.12794 21.5063 5.02761 21.5063 4.22581C21.5063 3.42735 21.4934 3.32323 21.3751 3.17L21.244 3H18.527C15.8945 3 15.8062 3.004 15.6835 3.12903C15.5687 3.24606 15.557 3.34406 15.557 4.18484C15.557 5.01864 15.5699 5.12832 15.6855 5.27819L15.8141 5.44477L15.6774 8.36755C15.6022 9.9751 15.5342 11.2982 15.5264 11.3079C15.507 11.3315 10.3243 11.9677 10.1509 11.9677C10.014 11.9677 10.0135 11.9617 9.86595 8.71406L9.71816 5.46045L9.85278 5.28606C9.97519 5.12742 9.98734 5.03148 9.98734 4.22581C9.98734 3.42735 9.97443 3.32323 9.85614 3.17L9.725 3H7.00804C4.37551 3 4.28722 3.004 4.16456 3.12903ZM9.10127 4.22581V4.54839H7.01266H4.92405V4.22581V3.90323H7.01266H9.10127V4.22581ZM20.6203 4.22581V4.54839H18.5316H16.443V4.22581V3.90323H18.5316H20.6203V4.22581ZM8.85228 5.82258C8.85456 6.02658 8.91905 7.51452 8.99551 9.12903L9.13456 12.0645L8.97551 12.1074C8.88804 12.131 8.03823 12.2447 7.08703 12.36C5.69076 12.5293 5.32804 12.5934 5.20411 12.6927C5.01019 12.8483 5.00089 13.1428 5.18399 13.3295C5.30525 13.4531 5.36146 13.4614 5.80108 13.4213C6.06715 13.397 6.34892 13.3617 6.42722 13.3429L6.56962 13.3086V17.993V22.6774H5.46057H4.35146L4.38722 22.1774C4.4069 21.9025 4.57778 18.3097 4.7669 14.1935C4.95608 10.0774 5.12886 6.42665 5.15089 6.08065L5.19089 5.45161H7.01949H8.8481L8.85228 5.82258ZM20.3708 5.75806C20.3728 5.92665 20.4255 7.09516 20.4878 8.35484C20.5502 9.61452 20.5842 10.6619 20.5633 10.6825C20.5096 10.7352 16.5061 11.2148 16.4655 11.1734C16.4471 11.1547 16.4915 9.89594 16.5642 8.37613C16.6368 6.85639 16.6963 5.57665 16.6963 5.53226C16.6962 5.46961 17.1054 5.45161 18.5316 5.45161H20.3671L20.3708 5.75806ZM28.5949 18.5806V26.5484H27.3608H26.1266V24.1261V21.7038L25.9712 21.5455L25.8159 21.3871H24.1358C22.5401 21.3871 22.4494 21.3935 22.3291 21.5161C22.207 21.6406 22.2025 21.7312 22.2025 24.0968V26.5484H21.8544H21.5063V24.1261V21.7038L21.351 21.5455L21.1956 21.3871H19.5354C17.918 21.3871 17.8715 21.3907 17.7287 21.5274L17.5823 21.6677V24.108V26.5484H12.519H7.4557V19.8847V13.221L15.288 12.2626C21.91 11.4523 28.3709 10.6525 28.5475 10.6213C28.5736 10.6166 28.5949 14.1984 28.5949 18.5806ZM20.6203 24.4194V26.5484H19.5443H18.4684V24.4194V22.2903H19.5443H20.6203V24.4194ZM25.2405 24.4194V26.5484H24.1646H23.0886V24.4194V22.2903H24.1646H25.2405V24.4194ZM6.56962 25.0645V26.5484H4.98234H3.395L3.42886 26.371C3.44747 26.2734 3.48158 25.6274 3.50475 24.9355C3.52785 24.2435 3.5593 23.6557 3.57462 23.629C3.58987 23.6024 4.27 23.5806 5.08601 23.5806H6.56962V25.0645ZM30.1139 27.7742V28.0968H16H1.88608V27.7742V27.4516H16H30.1139V27.7742Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1203 17.7097C23.0054 17.8268 22.9937 17.9247 22.9937 18.767C22.9937 19.4113 22.9806 19.7195 23.1252 19.8667C23.2694 20.0133 23.57 20 24.1962 20C24.8236 20 25.1242 20.0129 25.268 19.8662C25.4114 19.7198 25.3987 19.4145 25.3987 18.7792C25.3987 18.16 25.4109 17.8602 25.2699 17.7153C25.1268 17.5682 24.8257 17.5806 24.1937 17.5806C23.3312 17.5806 23.2356 17.5921 23.1203 17.7097ZM24.5127 19.129V18.8065V18.4839H24.1962H23.8797V18.8065V19.129H24.1962H24.5127Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4684 17.7097C18.3535 17.8268 18.3418 17.9247 18.3418 18.767C18.3418 19.4113 18.3287 19.7195 18.4733 19.8667C18.6175 20.0133 18.9181 20 19.5443 20C20.1717 20 20.4723 20.0129 20.6161 19.8662C20.7595 19.7198 20.7468 19.4145 20.7468 18.7792C20.7468 18.16 20.759 17.8602 20.618 17.7153C20.4749 17.5682 20.1738 17.5806 19.5418 17.5806C18.6793 17.5806 18.5837 17.5921 18.4684 17.7097ZM19.8608 19.129V18.8065V18.4839H19.5443H19.2278V18.8065V19.129H19.5443H19.8608Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIndustry32;
