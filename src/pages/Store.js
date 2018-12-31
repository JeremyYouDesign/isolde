import React, { Component } from 'react';
import { Col, Row } from '../components/Grid';
import logo from '../images/store-logo.png';

class Store extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col size="6">
            <img id="store-logo" src={ logo } alt="logo" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Store;