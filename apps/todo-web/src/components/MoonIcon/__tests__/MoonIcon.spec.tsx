import { describe, expect, it } from 'vitest';

import { baseRender } from '../../../utils';
import MoonIcon from '../MoonIcon';

describe('MoonIcon', () => {
  it('should render correctly', () => {
    const screenLight = baseRender(<MoonIcon />);
    expect(screenLight.baseElement).toMatchSnapshot();

    const screenDark = baseRender(<MoonIcon />, 'dark');
    expect(screenDark.baseElement).toMatchSnapshot();
  });

  it('should render filled icon if filled prop is passed', () => {
    const screen = baseRender(<MoonIcon filled />);

    expect(screen.getByTestId('filled-icon')).toBeInTheDocument();
    expect(screen.baseElement).toMatchSnapshot();
  });
});
