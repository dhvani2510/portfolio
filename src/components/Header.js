
const Header = () => {
  // run a function on click
  const handleClick = () => {
      document.body.classList.toggle("dark-mode");
      document.getElementById("color-mode").classList.toggle("uil-sun");
      document.getElementById("color-mode").classList.toggle("uil-moon");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-light headroom headroom--top headroom--not-bottom">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="uil uil-user"></i> Dhvani Sheth
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span data-hover="About">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                <span data-hover="Projects">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <span data-hover="Resume">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span data-hover="Contact">Contact</span>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div onClick={handleClick} className="color-mode d-lg-flex justify-content-center align-items-center">
                <i className="uil uil-moon" id="color-mode"></i> 
                &nbsp;
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
