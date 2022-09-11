import { HashRouter } from "react-router-dom"
import { ContentPanel } from "./ContentRouter"
import { SideNavBar } from "../SideNavBar/SideNavBar"
import '../../themes/defaultTheme.css';

export function Main() {
    return (
        <HashRouter>
            <div className='d-flex flex-nowrap' style={{ height: "100vh" }}>
                <SideNavBar />
                <ContentPanel />
            </div>
        </HashRouter>
    )
}