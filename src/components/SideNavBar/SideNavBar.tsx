import { Link, NavLink } from "react-router-dom";
import './sideNavBar.css';
export function SideNavBar() {
    return (
        <>
            <div className=" flex-shrink-0 p-3 text-bg-dark text-center side-bar-nav" >
                <img src="https://github.com/mdrozyn.png" alt="" width="150" height="150" style={{ margin: "0 auto" }} className="rounded-circle my-3"></img>
                <Link to="introduction" className="d-flex align-items-center mb-3 mb-md-0 mx-md-auto text-decoration-none text-center">
                    <span className="fs-4">Matt Drozynski</span>
                </Link>
                <hr></hr>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="introduction" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Introduction
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="development" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Development
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="music" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Music
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="photos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Photos
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="art" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Art
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="running" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Running
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="outdoors" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Outdoors
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">
                            Contact
                        </NavLink>
                    </li> */}
                </ul>
                <hr></hr>
            </div>
        </>
    )
}