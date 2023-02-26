import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PointControl from '../pages/PointControl';
import PointControlAccess from '../pages/PointControlAccess';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<PointControlAccess />} />
        <Route path='/point-control/:id' element={<PointControl />}/>
      </Routes>
    </BrowserRouter>
  );
}
