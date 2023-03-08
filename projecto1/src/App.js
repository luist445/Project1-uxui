import './App.css'
import Homepage from './components/Homepage';
import Food from './components/Food';
import Lodging from './components/Lodging';
import Attractions from './components/Attractions';
import { Routes, Route, Outlet, Link} from "react-router-dom";

export default function App() {
  return(
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Homepage />} />
        <Route path="Food" element={<Food />} />
        <Route path="Lodging" element={<Lodging />} />
        <Route path="Attractions" element={<Attractions />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

}

const navStyle = {textDecoration: "none", color: "black"}
function Layout() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
          <Link style={navStyle} to="/Food">Food</Link>
          </li>
          <li>
          <Link style={navStyle} to="/Attractions">Attractions</Link>
          </li>
          <li>
          <Link style={navStyle} to="/Lodging">Places to Stay</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}