import "./App.css";

import { Routes, Route } from "react-router-dom";

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
    <PrimeReactProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Trying />} />
        <Route path="/prueba" element={<MainTable />} />
      </Routes>
    </PrimeReactProvider>
  );
}

export default App;
