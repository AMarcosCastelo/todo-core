import { Navbar, Text } from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <Text>My Todo-s</Text>
      </Navbar.Brand>
    </Navbar>
  );
}
