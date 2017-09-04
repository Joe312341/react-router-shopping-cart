import React from 'react';
import { Grid,Col, Form, FormGroup, FormControl, ControlLabel, Button, Label } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class OrderForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: ''
    }
    this.handleConfirmOrder = this.handleConfirmOrder.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleConfirmOrder(e) {
    e.preventDefault()
    if(this.props.items.length > 0) {
      this.props.history.push(`confirm`)
    }
  }
  handleOnChange(e) {
    this.setState({ item: e.target.value})
  }
  handleAddItem(e) {
    this.props.handleItemChange(this.state.item)
  }
  render() {
    return (
      <Grid fluid>
        <Col xs={6}>
          <Form horizontal>
            <FormGroup controlId="username">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={8}>
                <FormControl onChange={this.handleOnChange} name="customerName" type="text" placeholder="Name" />
              </Col>
              <Col>
                <Button onClick={this.handleAddItem}>Add</Button>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" onClick={this.handleConfirmOrder}>
                  Proceed to Confirm Order
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={6}>
          { this.props.items.map((item, index) =>
            <Label key={item+index} bsStyle="success">{item}</Label>
          )}
        </Col>
      </Grid>
    )
  }
}
 export default withRouter(OrderForm);
