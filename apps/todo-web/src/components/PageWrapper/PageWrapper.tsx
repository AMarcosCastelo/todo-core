import { memo } from 'react';

import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => (
  <>
    <Header />
    {children}
  </>
);

export default memo(PageWrapper);
