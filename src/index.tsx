import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BioPage } from './routes/BioPage';
import { HomePage } from './routes/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="bio" element={<BioPage />} />
    </Routes>
  </BrowserRouter>
);

