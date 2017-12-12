import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const styles = {
  activeNav: {
    textDecoration: 'underline',
    backgroundColor: 'black',
  },
}

const Navbar = () => (
  <Menu>
    <Menu.Item name='Home'>
      <NavLink exact activeStyle={styles.activeNav} to='/'>Home</NavLink>
    </Menu.Item>
    <Menu.Item name='About'>
      <NavLink activeStyle={styles.activeNav} to='/about'>About</NavLink>
    </Menu.Item>
  </Menu>
)

export default Navbar;
