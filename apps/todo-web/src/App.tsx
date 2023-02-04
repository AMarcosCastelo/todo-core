import { memo, useEffect, useState } from 'react';
import { getDocumentTheme, NextUIProvider } from '@nextui-org/react';

import PageWrapper from './components/PageWrapper';
import { darkTheme, lightTheme } from './utils';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver(() => {
      const newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <PageWrapper>{children}</PageWrapper>
    </NextUIProvider>
  );
};

export default memo(App);
