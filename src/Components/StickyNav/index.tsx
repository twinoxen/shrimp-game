import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

function StickyNav() {
  return (
    <Container>
      <Row>
        <Col>
          <FaHome />
        </Col>
      </Row>
    </Container>
  );
}

export default StickyNav;
