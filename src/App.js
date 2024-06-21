import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import GamePage from "./components/GamePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>   {/* Its path is set to the base URL i.e just '/' which will ensure that the error page does not load on the base URL */}
          <Route path='/gamepage' element={<GamePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
