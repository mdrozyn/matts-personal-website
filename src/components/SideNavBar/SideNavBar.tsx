import { Link, NavLink } from "react-router-dom";
import './sideNavBar.css';
export function SideNavBar() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark text-center" style={{ width: 280 }}>
            <img src="https://github.com/mdrozyn.png" alt="" width="150" height="150" style={{margin: "0 auto"}} className="rounded-circle my-3"></img>
                <Link to="introduction" className="d-flex align-items-center mb-3 mb-md-0 mx-md-auto text-white text-decoration-none text-center">
                    <span className="fs-4">Matt Drozynski</span>
                </Link>
                <hr></hr>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="introduction" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Introduction
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="development" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Development
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="music" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Music
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="photos" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Photos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="art" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Art
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="outdoors" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Outdoors
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="blog" className={({ isActive }) => isActive ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <hr></hr>
                <div className="dropdown">
                    {/* <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdrozyn.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                        <strong>mdrozyn</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Placeholders for now...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul> */}
                </div>
            </div>
        </>
    )
}