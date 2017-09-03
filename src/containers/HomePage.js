import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

const HomePage = () => (
  <Grid>
    <Jumbotron>
      <h1>Shopping Cart Route Example</h1>
      <p>This example is meant to show a possible flow for building a checkout process using
      React and React Router 4.</p>
      <p>Click on the Orderform navigation to continue!</p>
    </Jumbotron>
  </Grid>
)

export default HomePage;
