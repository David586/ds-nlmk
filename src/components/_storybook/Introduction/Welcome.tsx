import React, { FC, ReactNode } from 'react';

import { CopyWrapper } from '@components/Colors/subcomponents/CopyWrapper';
import StarSvgIcon from '@components/Icon/icons_internal/StarSvgIcon'
import GitHubSvgIcon from '@components/Icon/icons_internal/GitHubSvgIcon';
import FigmaLogoSvgIcon from '@components/Icon/icons_internal/FigmaLogoSvgIcon';
import WebSvgIcon from '@components/Icon/icons_internal/WebSvgIcon';
import { Button, Typography, Link, Icon } from '@components/index';
// Add TS disable error comment for import file from under the root direction 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { version } from '@root/package.json';
import clsx from 'clsx';

import styles from './Welcome.module.scss';

const FooterSection: FC<{
  title: string;
  description: string | JSX.Element;
  buttonText?: string;
}> = ({ title, description, buttonText }) => {
  return (
    <div className={styles['footer-section']}>
      <Typography
        className={styles['footer-header']}
        variant="Subheading3-Medium"
      >
        {title}
      </Typography>
      <Typography className={styles['footer-text']} variant="Body1">
        {description}
      </Typography>
      {buttonText && <><br /><Button variant="secondary">{buttonText}</Button></>}
    </div>
  );
};

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <FooterSection
        title="Подключение"
        description={(
          <ul className={styles.npm}>
            <li>
              <CopyWrapper copy={'npm install @nlmk/ds-2.0'} placement="bottom">
                <code className={styles.code}>
                  <div>npm install @nlmk/ds-2.0</div>
                  <Icon
                    containerSize={16}
                    name="IconContentCopy24"
                    color="inherit"
                  />
                </code>
              </CopyWrapper>
            </li>
            <li>
              <CopyWrapper copy={'yarn add @nlmk/ds-2.0'} placement="bottom">
                <code className={styles.code}>
                  <div>yarn add @nlmk/ds-2.0</div>
                  <Icon
                    containerSize={16}
                    name="IconContentCopy24"
                    color="inherit"
                  />
                </code>
              </CopyWrapper>
            </li>
            <li>
              <CopyWrapper copy={'pnpm install @nlmk/ds-2.0'} placement="bottom">
                <code className={styles.code}>
                  <div>pnpm install @nlmk/ds-2.0</div>
                  <Icon
                    containerSize={16}
                    name="IconContentCopy24"
                    color="inherit"
                  />
                </code>
              </CopyWrapper>
            </li>
          </ul>
        )}
      />
      <FooterSection
        title={`Версия: ${version}`}
        description={
          <>
            <Typography variant="Body1">Добавлен основной набор компонентов, который поможет, как конструктор в строительстве вашего проекта.</Typography>
          </>
        }
      />
      <FooterSection
        title="Контрибьютинг"
        description="Приносите свои изменения, мы с радостью их расмотрим и примем внутрь дизайн-системы 2.0 😊."
      />
    </div>
  );
};

export const WelcomePage = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.main}>
        <div className={styles.description}>
          <Typography
            variant="Heading1"
            className={styles['description-header']}
          >
            Дизайн-система 2.0 НЛМК
          </Typography>
          <Typography
            variant="Subheading3-Medium"
            className={styles['description-subheader']}
          >
            Набор компонентов, инструментов и правил, которые упрощают создание,
            а также визуальное и техническое обновление продуктов НЛМК.
          </Typography>
          <Typography
            variant="Body1"
            className={styles['description-definition']}
          >
            Дизайн-система НЛМК – одна из первых в мире, созданная с ориентацией
            на сложные MES-cистемы. Предварительно мы провели полноценное
            исследование, в котором собрали обратную связь от пользователей. По
            результатам создали современную дизайн-систему, которая обеспечивает
            максимально последовательный опыт, а также отражает технологичность
            и готовность компании к изменениям.
          </Typography>
          <div
            className={clsx(
              styles['description-buttons'],
              styles['description-buttons--primary']
            )}
          >
            <Link href="https://www.npmjs.com/package/@nlmk/ds-2.0" target='_blank' className={styles.links}>
              <Button startIcon={<StarSvgIcon />} variant="primary">
                NPM
              </Button>
            </Link>
            <Link href="https://github.com/nlmk-group/ds-2.0" target='_blank' className={styles.links}>
              <Button startIcon={<GitHubSvgIcon />} variant="primary">
                Github
              </Button>
            </Link>
            <Link href="https://ds.nlmk.com/" target='_blank' className={styles.links}>
              <Button
                startIcon={<WebSvgIcon />}
              >
                Сайт дизайн-системы 2.0
              </Button>
            </Link>
            <Link href="https://www.figma.com/community/file/1314246600711980667" target='_blank' className={styles.links}>
              <Button startIcon={<FigmaLogoSvgIcon />} variant="primary">
                UI-Kit
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.icon}>
          <img src="img/picture-pc.png" alt="NLMK UI Picture" />
        </div>
      </div>
    </div>
  );
};
