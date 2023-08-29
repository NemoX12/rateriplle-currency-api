import React from "react";
import { NavBar } from "./components/navbar";
import { Main } from "./pages/main-page/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./api/config"; // You can Delete this Line

function App() {
  const [newCurrency, setNewCurrency] = useState<any>({});

  useEffect(() => {
    // Delete ${API_KEY} and insert your personal API
    Axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`).then(
      (res) => setNewCurrency(res.data.conversion_rates)
    );
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar
          eur={newCurrency.EUR}
          gbp={newCurrency.GBP}
          cad={newCurrency.CAD}
        />
        <Routes>
          <Route path="/" element={<Main newCurrency={newCurrency} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
