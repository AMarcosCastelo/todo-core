import { describe, expect, it } from 'vitest';

import { baseRender } from '../../../utils';
import SunIcon from '../SunIcon';

describe('SunIcon', () => {
  it('should render correctly', () => {
    const screenLight = baseRender(<SunIcon />);

    expect(screenLight.baseElement).toMatchSnapshot();
  });

  it('should render filled icon if filled prop is passed', () => {
    const screen = baseRender(<SunIcon filled />);

    expect(screen.getByTestId('filled-icon')).toBeInTheDocument();
    expect(screen.baseElement).toMatchSnapshot();
  });
});
