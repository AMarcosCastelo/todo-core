import { vi } from 'vitest';

import { baseRender } from '~/utils/testing';

import TodoTrashButton from '../todo-trash-button';

describe('TodoTrashButton', () => {
  const defaultProps = {
    handleClick: vi.fn(),
  };
  const component = (customProps = {}) => (
    <TodoTrashButton {...customProps} {...defaultProps} />
  );

  it('should render correctly', () => {
    const screen = baseRender(component());

    expect(screen.container).toMatchSnapshot();
  });

  it('should render the icon', () => {
    const screen = baseRender(component());

    expect(screen.getByTestId('trash-icon')).toBeInTheDocument();
  });
});
