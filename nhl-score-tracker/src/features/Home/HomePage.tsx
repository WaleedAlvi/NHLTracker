import React from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

const HomePage = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1>Home Page</h1>
    </Container>
  );
};

export default observer(HomePage);
