import { memo } from 'react';
import { NextUIProvider } from '@nextui-org/react';

import PageWrapper from './components/PageWrapper';
import { darkTheme } from './utils';

const App: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextUIProvider theme={darkTheme}>
    <PageWrapper>{children}</PageWrapper>
  </NextUIProvider>
);

export default memo(App);
