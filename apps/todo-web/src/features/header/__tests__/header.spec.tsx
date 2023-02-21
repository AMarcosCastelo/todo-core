import { baseRender } from '../../../utils/testing';
import { Header } from '../header';

describe('Todo form', () => {
  it('should render correctly', () => {
    const screen = baseRender(<Header />);

    expect(screen.container).toMatchSnapshot();
  });
});
