import { HomePage, FilmsPage } from "./indx";
import "./App.css";
import{ BrowserRouter, Router, Route, NavLink } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>

    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink> 
        </li>

        <li>
          <NavLink to="films">Films</NavLink> 
        </li>
      </ul>
    </nav>

    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="films" element={<FilmsPage />} />
      </Route>
      </BrowserRouter>
  )
}

export default App;