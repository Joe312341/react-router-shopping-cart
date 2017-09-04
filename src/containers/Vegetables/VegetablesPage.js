import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as vegetableActions from './actions';
import {
  Switch,
  Route
} from 'react-router-dom';
import OrderForm from '../OrderForm';
import ConfirmPage from '../ConfirmPage';

class VegetablesPage extends React.Component {
  componentWillUnmount() {
    // the form is cleared once the user navigates to a different topic (fruits)
    this.props.actions.clearVegetables();
  }
  render() {
    const { match, vegetables, actions } = this.props;
    return (
      <div>
        <Switch>
          <Route
            path={`${match.url}/order`}
            render={ () => <OrderForm
              items={vegetables}
              handleItemChange={actions.addVegetable}
            />}
          />
          <Route
            path={`${match.url}/confirm`}
            render={ () => <ConfirmPage
              items={vegetables}
            />}
          />
          {/* <Route path={`${this.props.match.url}/review`} component={ConfirmPage} /> */}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vegetables: state.vegetablesReducer.vegetables
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, vegetableActions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(VegetablesPage)
