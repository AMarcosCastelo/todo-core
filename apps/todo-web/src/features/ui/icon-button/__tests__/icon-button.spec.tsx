import { Check } from 'lucide-react';

import { baseRender } from '~/utils/testing';

import IconButton from '../icon-button';

describe('Todo form', () => {
  const defaultProps = {
    ariaLabel: 'Check Button',
    icon: <Check data-testid="check-icon" />,
  };
  const component = (customProps = {}) => (
    <IconButton {...customProps} {...defaultProps} />
  );

  it('should render correctly', () => {
    const screen = baseRender(component());

    expect(screen.container).toMatchSnapshot();
  });

  it('should render the icon', () => {
    const screen = baseRender(component());

    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
  });
});
