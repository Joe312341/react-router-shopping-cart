import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fruitActions from './actions';
import {
  Switch,
  Route
} from 'react-router-dom';
import OrderForm from '../OrderForm';
import ConfirmPage from '../ConfirmPage';

class FruitsPage extends React.Component {
  componentWillUnmount() {
    this.props.actions.clearFruits();
  }
  render() {
    const { match, fruits, actions } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/order`}
          render={ () => <OrderForm
            items={fruits}
            handleItemChange={actions.addFruit}
          />}
        />
        <Route
          path={`${match.url}/confirm`}
          render={ () => <ConfirmPage
            items={fruits}
          />}
        />
        {/* <Route path={`${this.props.match.url}/review`} component={ConfirmPage} /> */}
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  fruits: state.fruitsReducer.fruits
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, fruitActions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FruitsPage)
