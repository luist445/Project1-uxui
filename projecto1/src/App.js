import './App.css'
import Homepage from './components/Homepage';
import {Routes, Route, Outlet, Link} from "react-router-dom";

export default function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Homepage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

}

const navStyle = {textDecoration: "none", color: "red"}
function Layout() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
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