import { vi } from 'vitest';

import { baseRender } from '~/utils/testing';

import TodoCheckButton from '../todo-check-button';

describe('TodoCheckButton', () => {
  const defaultProps = {
    handleClick: vi.fn(),
  };
  const component = (customProps = {}) => (
    <TodoCheckButton {...customProps} {...defaultProps} />
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
