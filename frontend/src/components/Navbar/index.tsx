import { ReactComponent as GithibIcon } from "assets/img/github.svg";
import './styles.css';


function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dkmovie-nav-content">
          <h1> DK Movie </h1>
          <a href="https://github.com/DK-Guilherme">
            <div className="dkmovie-contact-container">
              <GithibIcon />
              <p className="dkmovie-contact-link">/DK-Guilherme</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
