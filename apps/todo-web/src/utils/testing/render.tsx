import { NextUIProvider } from '@nextui-org/react';
import {
  render as testRender,
  type RenderResult,
} from '@testing-library/react';

import { darkTheme, lightTheme } from '../helpers';

export const baseRender = (
  content: React.ReactElement,
  theme?: 'light' | 'dark',
): RenderResult =>
  testRender(content, {
    wrapper: ({ children }) => (
      <NextUIProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </NextUIProvider>
    ),
  });
