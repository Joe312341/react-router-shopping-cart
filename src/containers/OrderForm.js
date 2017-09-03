import React from 'react';
import { Grid,Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Orderform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customerName: '',
      productOrdered: ''
    }
    this.products = ['Bananas', 'Apples', 'Oranges']
    this.handleConfirmOrder = this.handleConfirmOrder.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(event) {
    this.setState({[event.target.name]: event.target.value })
  }
  handleConfirmOrder(e) {
    e.preventDefault()
    if(this.state.customerName.length > 0 && this.state.productOrdered.length > 0) {
      this.props.history.push(`confirm`)
    }
  }
  render() {
    console.log(this.props)
    return (
      <Grid fluid>
        <Col xs={6}>
          <Form horizontal>
            <FormGroup controlId="username">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl onChange={this.handleOnChange} name="customerName" type="text" placeholder="Name" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={2}>
                Select a product to purchase
              </Col>
              <Col sm={10}>
                <FormControl onChange={this.handleOnChange} name="productOrdered" componentClass="select" placeholder="select">
                  <option></option>
                  {this.products.map((product) =>
                    <option key={product} value={product.toLowerCase()}>{product}</option>
                  )}
                </FormControl>
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
      </Grid>
    )
  }
}

export default withRouter(Orderform);
