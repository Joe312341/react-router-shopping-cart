import React from 'react';
import {
  Switch,
  Route,
  withRouter } from 'react-router-dom';
import OrderForm from './OrderForm';
import ConfirmPage from './ConfirmPage';

const FruitsPage = ({ match }) => (
  <div>
    <Switch>
      <Route path={`${match.url}/order`} component={OrderForm} />
      <Route path={`${match.url}/confirm`} component={ConfirmPage} />
      {/* <Route path={`${this.props.match.url}/review`} component={ConfirmPage} /> */}
    </Switch>
  </div>
)

export default withRouter(FruitsPage);
