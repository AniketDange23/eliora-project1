
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-warning">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/elioralogo.png" alt="Logo" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="https://www.elioratechno.com/contact">
                Contact Us
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
