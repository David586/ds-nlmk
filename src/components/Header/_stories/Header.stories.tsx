import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions';

import { Breadcrumbs, Header } from '@components/index';
import { Meta, Story } from '@storybook/react';

import { withDesign } from 'storybook-addon-designs';
import { breadcrumbs } from '@components/Breadcrumbs/constants';
import styles from '@components/_storybook/styles.module.scss';

import { IHeader } from '../types'
import argsTypes from './argsTypes';
import {
  DEFAULT_HEADER,
  HEADER_BACK,
  HEADER_DATE,
  HEADER_FAVORITE,
  HEADER_NOTIFICATION,
  HEADERS_DIFFERENT_SPACING,
  HEADER_BACKGROUND,
  HEADER_BREADCRUMBS
} from './text';
import { typeMapping } from '../enums';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Header/Stories',
  component: Header,
  decorators: [withDesign, withWrapper],
  argTypes: argsTypes
} as Meta<typeof Header>;

export const DefaultHeader = (argTypes: IHeader): ReactNode => {
  return (
    <Header
      {...argTypes}
      back={argTypes.back || undefined}
      favorite={argTypes.favorite || undefined}
      notification={argTypes.notification || undefined}
    />
  );
};

DefaultHeader.storyName = DEFAULT_HEADER;
DefaultHeader.args = {
  title: DEFAULT_HEADER
};

export const HeaderBack = (argTypes: IHeader): ReactNode => {
  return (
    <Header
      {...argTypes}
      back={argTypes.back || undefined}
      favorite={argTypes.favorite || undefined}
      notification={argTypes.notification || undefined}
    />
  );
};

HeaderBack.storyName = HEADER_BACK;
HeaderBack.args = {
  title: HEADER_BACK,
  back: action('goBack')
};

export const HeaderDate = (argTypes: IHeader): ReactNode => {
  return (
    <Header
      {...argTypes}
      back={argTypes.back || undefined}
      favorite={argTypes.favorite || undefined}
      notification={argTypes.notification || undefined}
    />
  );
};

HeaderDate.storyName = HEADER_DATE;
HeaderDate.args = {
  title: HEADER_DATE,
  back: action('goBack'),
  date: true
};

export const HeaderFavorite = (argTypes: IHeader): ReactNode => {
  return (
    <Header
      {...argTypes}
      back={argTypes.back || undefined}
      favorite={argTypes.favorite || undefined}
      notification={argTypes.notification || undefined}
    />
  );
};

HeaderFavorite.storyName = HEADER_FAVORITE;
HeaderFavorite.args = {
  title: HEADER_FAVORITE,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite')
};

export const HeaderNotification = (argTypes: IHeader): ReactNode => {
  return (
    <Header
      {...argTypes}
      back={argTypes.back || undefined}
      favorite={argTypes.favorite || undefined}
      notification={argTypes.notification || undefined}
    />
  );
};

HeaderNotification.storyName = HEADER_NOTIFICATION;
HeaderNotification.args = {
  title: HEADER_NOTIFICATION,
  back: action('goBack'),
  date: true,
  notification: action('addToNotification'),
  notificationAmount: 9,
};

export const HeaderBackground = (argTypes: IHeader): ReactNode => {
  return (
    <>
      <Header
        {...argTypes}
        back={argTypes.back || undefined}
        favorite={argTypes.favorite || undefined}
        notification={argTypes.notification || undefined}
      />
      <Header
        {...argTypes}
        bg
        back={argTypes.back || undefined}
        favorite={argTypes.favorite || undefined}
        notification={argTypes.notification || undefined}
      />
    </>
  );
};

HeaderBackground.storyName = HEADER_BACKGROUND;
HeaderBackground.args = {
  title: HEADER_BACKGROUND,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9,
};

export const HeaderSpacing = (argTypes: IHeader): ReactNode => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {Object.values(typeMapping).map((typeValue: typeMapping) => (
        <Header
          {...argTypes}
          type={argTypes.type || typeValue}
          back={argTypes.back || undefined}
          favorite={argTypes.favorite || undefined}
          notification={argTypes.notification || undefined}
        />
      ))}
      {Object.values(typeMapping).map((typeValue: typeMapping) => (
        <Header
          {...argTypes}
          bg
          type={argTypes.type || typeValue}
          back={argTypes.back || undefined}
          favorite={argTypes.favorite || undefined}
          notification={argTypes.notification || undefined}
        />
      ))}
    </div>
  );
};

HeaderSpacing.storyName = HEADERS_DIFFERENT_SPACING;
HeaderSpacing.args = {
  title: HEADERS_DIFFERENT_SPACING,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9,
};

export const HeaderBreadcrumbs = (argTypes: IHeader): ReactNode => {
  return (
    <>
      <Header
        {...argTypes}
        back={argTypes.back || undefined}
        favorite={argTypes.favorite || undefined}
        notification={argTypes.notification || undefined}
        breadcrumbs={(<Breadcrumbs crumbs={breadcrumbs}/>)}
      />
    </>
  );
};

HeaderBreadcrumbs.storyName = HEADER_BREADCRUMBS;
HeaderBreadcrumbs.args = {
  title: HEADER_BREADCRUMBS,
  type: typeMapping.compact,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9,
};