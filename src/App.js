
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/Pages/StartPage';
import DetailsPage from './components/Pages/DetailsPage';
function App() {

  return <div className=''>Hi there

    <BrowserRouter>

      <Routes>
        <Route element={<StartPage />} path="/" exact={true} />
        <Route element={<DetailsPage />} path="/country" exact={true} />

      </Routes>

    </BrowserRouter>

    {/* <div className='grid grid-cols-4 gap-x-20 px-20'>
      {newArray}</div> */}
  </div>

}

export default App;
