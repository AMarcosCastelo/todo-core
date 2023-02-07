import { describe, expect, it, vi } from 'vitest';

import { baseRender } from '../../../utils';
import ThemeSwitch from '../ThemeSwitch';

describe('ThemeSwitch', () => {
  it('should render correctly', () => {
    const screen = baseRender(<ThemeSwitch />);

    expect(screen).toMatchSnapshot();
  });

  it('should render SunIcon if switch was unchecked', () => {
    const screen = baseRender(<ThemeSwitch />);

    expect(screen.getByTestId('sun-filled-icon')).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it('should render MoonIcon if switch was checked', () => {
    const screen = baseRender(<ThemeSwitch checked={true} />);

    expect(screen.getByTestId('moon-filled-icon')).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
