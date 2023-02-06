import { NextUIProvider } from '@nextui-org/react';
import {
  render as testRender,
  type RenderResult,
} from '@testing-library/react';

import { lightTheme } from '../helpers';

export const baseRender = (content: React.ReactElement): RenderResult =>
  testRender(content, {
    wrapper: ({ children }) => (
      <NextUIProvider theme={lightTheme}>{children}</NextUIProvider>
    ),
  });
