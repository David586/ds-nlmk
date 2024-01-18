import React, { ReactNode } from 'react';

import { Breadcrumbs } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { breadcrumbs } from '../constants';
import { targetMapping } from '../enums';
import { BreadcrumbsProps } from '../types';
import { breadcrumbsArgsTypes } from './argsTypes';
import { BASIC_COMPONENT_USE, CUSTOM_WIDTH, DIFFERENT_TARGET } from './text';

export default {
  title: 'Components/Breadcrumbs/Stories',
  component: Breadcrumbs,
  argTypes: breadcrumbsArgsTypes
};

export const BreadcrumbsDefault = (argTypes: BreadcrumbsProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs {...argTypes} />
    </div>
  );
};

BreadcrumbsDefault.storyName = BASIC_COMPONENT_USE;
BreadcrumbsDefault.args = {
  crumbs: breadcrumbs,
  width: 100
};

export const BreadcrumbsWidth = (argTypes: BreadcrumbsProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs {...argTypes} />
    </div>
  );
};

BreadcrumbsWidth.storyName = CUSTOM_WIDTH;
BreadcrumbsWidth.args = {
  width: 70,
  crumbs: breadcrumbs
};

export const BreadcrumbsTarget = (argTypes: BreadcrumbsProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs {...argTypes} />
    </div>
  );
};

BreadcrumbsTarget.storyName = DIFFERENT_TARGET;
BreadcrumbsTarget.args = {
  width: 100,
  crumbs: [
    {
      href: 'https://www.lipsum.com/',
      label: `${targetMapping._blank}`,
      target: targetMapping._blank
    },
    {
      href: 'https://www.lipsum.com/',
      label: `${targetMapping._parent}`,
      target: targetMapping._parent
    },
    {
      href: 'https://www.lipsum.com/',
      label: `${targetMapping._self}`,
      target: targetMapping._self
    },
    {
      href: 'https://www.lipsum.com/',
      label: `${targetMapping._top}`,
      target: targetMapping._top
    }
  ]
};
