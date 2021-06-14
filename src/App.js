import './App.css';
import ResponsiveDrawer from './ResponsiveDrawer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveDrawer />
      </div>
    </Router>
  );
}

export default App;
