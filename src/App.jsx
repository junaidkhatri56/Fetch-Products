import React from "react";
import ProductList from "./components/ProductList";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-center my-5">Welcome to the Product Store</h1>
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
