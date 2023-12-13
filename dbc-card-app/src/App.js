import './App.css';
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessCard from './BusinessCard';

function App() {
  return (
    <Container fluid className="d-flex flex-column" style={{ height: '100vh' }}>
      <BusinessCard />
    </Container>
  );
}

export default App;
