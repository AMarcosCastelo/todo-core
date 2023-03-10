import { Navbar, Spacer, Text } from '@nextui-org/react';
import { ListChecks } from 'lucide-react';

export const Header = () => (
  <Navbar isBordered>
    <Navbar.Brand>
      <ListChecks size="40" />

      <Spacer />

      <Text color="inherit" size="$lg">
        My Todo-s
      </Text>
    </Navbar.Brand>
  </Navbar>
);
