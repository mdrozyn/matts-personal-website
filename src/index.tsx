import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideNavBar } from './components/SideNavBar';
import { IntroductionPage } from './routes/IntroductionPage';
import { DevelopmentPage } from './routes/DevelopmentPage';
import { MusicPage } from './routes/MusicPage';
import { PhotosPage } from './routes/PhotosPage';
import { BlogPage } from './routes/BlogPage';
import { OutdoorsPage } from './routes/Outdoors';
import { ArtPage } from './routes/Art';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    {/* extract this to one main level component */}
    <BrowserRouter>
      <div className='d-flex flex-nowrap' style={{ height: "100vh" }}>
        <SideNavBar />
        <div className='d-flex flex-column flex-fill align-items-center'>
          <Routes>
            <Route path="introduction" element={<IntroductionPage />} />
            <Route path="development" element={<DevelopmentPage />} />
            <Route path="music" element={<MusicPage />} />
            <Route path="photos" element={<PhotosPage />} />
            <Route path="art" element={<ArtPage />} />
            <Route path="outdoors" element={<OutdoorsPage />} />
            <Route path="blog" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
);

