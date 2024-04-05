import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Box"
        description="Компонент Box представляет собой универсальный контейнер, используемый для стилизации и компоновки содержимого. Он обладает пропсами для управления стилями, включая background, paddingSpace, border, borderRadius и flexbox свойствами, такими как display, flexDirection, justifyContent, alignItems, flexWrap и gap. Это делает Box инструментом для создания структурированного и адаптивного интерфейса."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            height={500}
            description="Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st."
            code={`import { Box, Button, Divider } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style={{ width: "100%", padding: 0 }}>
    <Box
      border="1px solid var(--ac-button-grey-outline-default-stroke)"
      borderRadius="var(--8-radius)"
      paddingSpace="s"
    >
      <Button>Заполнить</Button>
      <Button variant="grey">Посмотреть</Button>
    </Box>
    <br/>
    <Divider dashed/>
    <br/>
    <Box justifyContent="center">
      <Box
        width="250px"
        flexDirection="column"
        borderRadius="var(--4-radius)"
        alignItems="center"
        background="var(--background-info)"
        st={{
          boxShadow: "0 10px 10px var(--background-default)",
          padding: "60px"
        }}
      >
        <Button>Заполнить</Button>
      </Box>
    </Box>
  </div>
)`}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Button" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
