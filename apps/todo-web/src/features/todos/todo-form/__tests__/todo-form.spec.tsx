import { baseRender } from '../../../../utils/testing';
import { TodoForm } from '../todo-form';

describe('Todo form', () => {
  it('should render correctly', () => {
    const screen = baseRender(<TodoForm />);

    expect(screen.container).toMatchSnapshot();
  });

  it('should render a input to create a new Todo', () => {
    const screen = baseRender(<TodoForm />);

    expect(
      screen.getByPlaceholderText('Create a new Todo'),
    ).toBeInTheDocument();
  });

  it('should render the button with "Add" label', () => {
    const screen = baseRender(<TodoForm />);

    expect(screen.getByText('ADD').parentElement?.tagName).toBe('BUTTON');
  });

  it('should render the button with Plus icon', () => {
    const screen = baseRender(<TodoForm />);
    const plusIconElement = screen.container.querySelector('.lucide-plus');

    expect(plusIconElement).toBeInTheDocument();
  });
});
