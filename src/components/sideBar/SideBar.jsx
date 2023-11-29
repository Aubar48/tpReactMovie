import { Link } from "react-router-dom";
export const SideBar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img
            className="w-100"
            src="/images/logo-DH.png"
            alt="Digital House"
          />
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Actions</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/">
          <i className="fas fa-fw fa-folder"></i>
          <span>Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/movies/list">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Peliculas</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-table"></i>
          <span>Actores</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};
