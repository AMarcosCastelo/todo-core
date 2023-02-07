import { changeTheme, Navbar, Switch, Text, useTheme } from '@nextui-org/react';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

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

        <ThemeSwitch />
      </Navbar.Content>
    </Navbar>
  );
}
