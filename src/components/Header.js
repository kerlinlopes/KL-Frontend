import { Link } from "react-router-dom";

function Header(props) {


  return (
    <header>
      <h1 className="Portfolio-name">My Portfolio Page</h1>
      <nav className="navStyle">
        <Link to="/">
          <div className="home-link">HOME</div>
        </Link>
        <Link to="/about">
          <div className="about-link">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="projects-link">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;