import { Navbar, Text } from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text>TODO</Text>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
