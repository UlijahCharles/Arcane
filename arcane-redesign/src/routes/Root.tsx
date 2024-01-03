import { Outlet } from "react-router-dom";
import Logo from "../assets/arcane_logo.png";

function Root() {
  return (
    <>
      <div className="background"></div>
      <div className="container">
        <header>
          <nav className="nav">
            <ul className="nav-list">
              <li className="logo">
                <img src={Logo} alt="Logo"></img>
              </li>

              <li className="nav-list-item">
                <p>About</p>
              </li>
              <li className="nav-list-item">
                <p>Cities</p>
              </li>
              <li className="nav-list-item">
                <p>Characters</p>
              </li>
              <li className="nav-list-item">
                <p>Episodes</p>
              </li>
              <li className="nav-list-item">
                <p>Gallery</p>
              </li>
              <li className="nav-list-item">
                <p>Soundtracks</p>
              </li>
              <li className="nav-list-item"></li>
              <li className="burger-menu">
                <img src="burger-menu.png" alt="Burger Menu"></img>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Root;
