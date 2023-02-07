import { describe, expect, it } from 'vitest';

import { baseRender } from '../../../utils';
import MoonIcon from '../MoonIcon';

describe('MoonIcon', () => {
  const component = (customProps = {}) => <MoonIcon {...customProps} />;

  it('should render correctly', () => {
    const screenLight = baseRender(component());

    expect(screenLight.baseElement).toMatchSnapshot();
  });

  it('should render filled icon if filled prop is passed', () => {
    const screen = baseRender(<MoonIcon filled />);

    expect(screen.getByTestId('moon-filled-icon')).toBeInTheDocument();
    expect(screen.baseElement).toMatchSnapshot();
  });
});
