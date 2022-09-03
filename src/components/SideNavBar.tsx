import { NavLink } from "react-router-dom";

export function SideNavBar() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280 }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" style={{ width: 40, height: 32 }}></svg>
                    <span className="fs-4">Matt Drozynski</span>
                </a>
                <hr></hr>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bio" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Bio
                        </NavLink>
                    </li>
                </ul>
                <hr></hr>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdrozyn.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                        <strong>mdrozyn</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Placeholders for now...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}