import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import "./App.css";

const App = () => {
  return (
    // <Provider store={store}>
    // <Router>
      <main>
        <Container>
          <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/login" element={<Login/>} />
          </Routes>
        </Container>
      </main>
    // </Router>
    // </Provider>
  );
};

export default App;