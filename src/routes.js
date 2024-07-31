<<<<<<< HEAD
const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
        </Routes>
        
        </BrowserRouter>
    )
=======
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio"
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={NotFound}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
>>>>>>> 0c64fc2e5e6088a5df12b7bae8b6e613703581d2
}

export default AppRoutes;