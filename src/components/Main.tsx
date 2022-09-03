import { BrowserRouter} from "react-router-dom"
import { ContentPanel } from "./ContentPanel"
import { SideNavBar } from "./SideNavBar/SideNavBar"

export function Main() {
    return (
        <BrowserRouter>
            <div className='d-flex flex-nowrap' style={{ height: "100vh" }}>
                <SideNavBar />
                <ContentPanel />
            </div>
        </BrowserRouter>
    )
}