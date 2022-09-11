import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { ArtPage } from "../../routes/ArtPage/ArtPage"
import { BlogPage } from "../../routes/BlogPage"
import { ContactPage } from "../../routes/ContactPage"
import { DevelopmentPage } from "../../routes/DevelopmentPage"
import { IntroductionPage } from "../../routes/IntroductionPage"
import { MusicPage } from "../../routes/MusicPage"
import { OutdoorsPage } from "../../routes/Outdoors"
import { PhotosPage } from "../../routes/PhotosPage"
import { RunningPage } from "../../routes/RunningPage/RunningPage"

export function ContentPanel() {
    const location = useLocation();
    return (
        <div className='d-flex flex-column flex-fill align-items-center'>
            <TransitionGroup className={"fade-container "}>
                <CSSTransition key={location.key} classNames="fade" timeout={150} unmountOnExit
                    appear>
                    <Routes location={location}>
                        <Route path="/" element={<Navigate replace to="introduction" />} />
                        <Route path="introduction" element={<IntroductionPage />} />
                        {/* <Route path="development" element={<DevelopmentPage />} />
                        <Route path="music" element={<MusicPage />} />
                        <Route path="photos" element={<PhotosPage />} /> */}
                        <Route path="art" element={<ArtPage />} />
                        <Route path="running" element={<RunningPage />} />
                        {/* <Route path="outdoors" element={<OutdoorsPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="contact" element={<ContactPage />} /> */}
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}