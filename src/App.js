import './App.css';
import { ShowButtons } from './components/ShowButtons.js';
import { ShowTabs } from "./components/ShowTabs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ShowSegments} from "./components/ShowSegments";
import {ShowToastNotif} from "./components/ShowToastNotif";
import {ShowInputs} from "./components/ShowInputs";
import {ShowDrawers} from "./components/ShowDrawers";
import {ShowSelectBoxes} from "./components/ShowSelectBoxes";
import {ShowTable} from "./components/ShowTable";
import {ShowProductCard} from "./components/ShowProductCard";

function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
      <Route
          path="/ShowButtons"
          element={<ShowButtons/>}
      />
        <Route
          path="/ShowTabs"
          element={<ShowTabs/>}
      />
        <Route
            path="/ShowSegments"
            element={<ShowSegments/>}
        />
        <Route
            path="/ShowToastNotif"
            element={<ShowToastNotif/>}
        />
        <Route
            path="/ShowInputs"
            element={<ShowInputs/>}
        />
        <Route
            path="/ShowDrawers"
            element={<ShowDrawers/>}
        />
        <Route
            path="/ShowSelectBox"
            element={<ShowSelectBoxes/>}
        />
        <Route
            path="/ShowTable"
            element={<ShowTable/>}
        />
        <Route
            path="/ShowCard"
            element={<ShowProductCard/>}
        />
        </Routes>
    </div>
      </Router>
  );
}

export default App;
