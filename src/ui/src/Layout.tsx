import React from "react";
import { Grid } from "./Grid";
import { Container, Row, Col } from "react-bootstrap";

export function Layout() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <h2>Left Column</h2>
          <p>
            This column takes up half the width on medium-sized screens and
            above.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Grid />
        </Col>
      </Row>
    </Container>
  );
}
