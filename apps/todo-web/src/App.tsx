import { memo } from 'react';
import { Container, NextUIProvider, Spacer } from '@nextui-org/react';

import Header from './features/header';
import { TodoForm } from './features/todos';
import { darkTheme } from './utils';

const App: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextUIProvider theme={darkTheme}>
    <Header />

    <Spacer />

    <Container>
      <TodoForm />
      {children}
    </Container>
  </NextUIProvider>
);

export default memo(App);
