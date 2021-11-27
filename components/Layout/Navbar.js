export default function Navbar({ themeToggler, checked }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="images/pnlogo.svg"
            style={{ objectFit: "contain" }}
            height="5%"
            width="6%"
          />
        </a>

        <span className="p-2">AM</span>
        <label className="switch">
          {checked ? (
            <input type="checkbox" onChange={themeToggler} checked />
          ) : (
            <input type="checkbox" onChange={themeToggler} />
          )}
          <span className="slider round"></span>
        </label>
        <span className="p-2">PM</span>

        <div className="collapse navbar-collapse" id="navbarScroll"></div>
      </div>
    </nav>
  );
}
