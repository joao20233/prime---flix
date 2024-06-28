import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from './pages/Favoritos'
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/header/header'

import Error from './pages/error'



function RoutesApp (){
    return ( 
      <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/filme/:id" element={ <Filme/> } />

            <Route path="favoritos" element={ <Favoritos/>} />
            <Route path="*" element={ <Error/>} />
          </Routes>
        </BrowserRouter>
      </>
     )
}

export default RoutesApp;
