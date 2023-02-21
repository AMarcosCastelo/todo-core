import { memo } from 'react';
import { NextUIProvider } from '@nextui-org/react';

import Header from './features/Header';
import { darkTheme } from './utils';

const App: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextUIProvider theme={darkTheme}>
    <Header />
    {children}
  </NextUIProvider>
);

export default memo(App);
