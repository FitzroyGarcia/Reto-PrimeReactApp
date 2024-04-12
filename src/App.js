import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { PrimeReactProvider } from 'primereact/api';

import MainTable from "./components/main/MainTable"

function App() {
  return (
    <PrimeReactProvider>
      <MainTable></MainTable>
    </PrimeReactProvider>
  );
}

export default App;
