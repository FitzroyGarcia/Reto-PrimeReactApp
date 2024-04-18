import "./App.css";

import {HashRouter, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { PrimeReactProvider } from "primereact/api";

import MainTable from "./components/main/MainTable";
import Navbar from "./components/navbar/navbar";
import Trying from "./components/trying";
/*<Route path="/trying" element={<Trying/>} /> */

function App() {
  return (
    <HashRouter>
      <PrimeReactProvider>
        <Navbar />
        <Routes>
          <Route path="/Reto-PrimeReactApp/" Component={Trying}></Route>
          <Route path="/PrimeReactProvider/#/prueba" Component={MainTable}></Route>
          <Route path="*"></Route>
        </Routes>
      </PrimeReactProvider>
    </HashRouter>
  );
}

export default App;
