import React from 'react';
import { Grid, Row, Label } from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom';

class ConfirmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        { this.props.items && this.props.items.length > 0 ?
        <Grid>
          <Row>Confirmation for the following items:</Row>
          <Row>
            { this.props.items.map((item, index) =>
              <Label key={item+index} bsStyle="success">{item}</Label>
            )}
          </Row>
        </Grid>
        : <Redirect to={'order'}/>
      }
      </div>
    )
  }
}

export default withRouter(ConfirmPage);
