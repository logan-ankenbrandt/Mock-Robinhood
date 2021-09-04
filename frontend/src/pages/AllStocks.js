import React from "react";
import { Container } from "react-bootstrap";
import StocksList from "../components/stock/StocksList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


function AllStocks() {
  return (
    <div>
      <Container>
        <StocksList />
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withRouter(AllStocks));