import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { sizesMappingInput } from '@components/declaration';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { gradientMapping, orientationMapping } from '../enums';
import argsTypes from './argsTypes';
import { BTN_GROUP_GRADIENTS, BTN_GROUP_SIZES, BTN_GROUP_VERTICAL, DEFAULT_BTN_GROUP } from './text';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="ButtonGroup"
        description="Компонент ButtonGroup представляет собой группу кнопок, которая позволяет объединять несколько элементов управления кнопками для создания более сложного и функционального пользовательского интерфейса."
        isStable
        codeLink="https://git.nlmk.com/design-system/open-source/-/tree/master/src/components/ButtonGroup"
        figmaLink="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description={DEFAULT_BTN_GROUP}
            code={`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <ButtonGroup>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </>
)`}
          />

          <Editor
            description={BTN_GROUP_SIZES}
            code={`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
  >
    <ButtonGroup size="${sizesMappingInput.m}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup size="${sizesMappingInput.s}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup size="${sizesMappingInput.xs}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </div>
)`}
          />

          <Editor
            description={BTN_GROUP_GRADIENTS}
            code={`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
  >
    <ButtonGroup variant="${gradientMapping.outline}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup variant="${gradientMapping.primary}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup variant="${gradientMapping.text}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </div>
)`}
          />

          <Editor
            description={BTN_GROUP_VERTICAL}
            code={`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <ButtonGroup orientation="${orientationMapping.vertical}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </>
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=3471-2090&mode=design&t=ahBL5dLkbUJwiCqX-0" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="ButtonGroup" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
