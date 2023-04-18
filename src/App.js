
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/Pages/StartPage';
import DetailsPage from './components/Pages/DetailsPage';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
function App() {

  return <>
    <TopHeader />

    <BrowserRouter>

      <Routes>
        <Route element={<StartPage />} path="/" exact={true} />
        <Route element={<DetailsPage />} path="/country" exact={true} />

      </Routes>

    </BrowserRouter>
    <Footer />

  </>

}

export default App;
