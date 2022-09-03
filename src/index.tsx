import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BioPage } from './routes/BioPage';
import { HomePage } from './routes/HomePage';
import { SideNavBar } from './components/SideNavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    {/* extract this to one main level component */}
    <BrowserRouter>
      <div className='d-flex flex-nowrap' style={{ height: "100vh" }}>
        <SideNavBar />
        <div className='d-flex flex-column'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="bio" element={<BioPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
);

