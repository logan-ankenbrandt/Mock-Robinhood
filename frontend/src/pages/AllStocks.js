import React from "react";
import { Container } from "react-bootstrap";
import StocksList from "../components/stock/StocksList";

function AllStocks() {
  return (
    <div>
      <Container>
        <StocksList/>
      </Container>
    </div>
  );
}

export default AllStocks;