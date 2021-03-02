import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

const NavBar = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header as={NavLink} exact to="/">
            <img
              src="/assets/nhl_logo.png"
              style={{ marginRight: '10 px' }}
              alt="NHL Logo"
            />
          </Menu.Item>
          <Menu.Item name="Head to Head" as={NavLink} to="/headtohead" />
          <Menu.Item name="Boys" as={NavLink} to="/boysdashboard" />
          <Menu.Item name="Girls" as={NavLink} to="/girlsdashboard" />
        </Container>
      </Menu>
    </div>
  );
};

export default observer(NavBar);
