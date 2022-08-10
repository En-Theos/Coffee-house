import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../footer";
import { MainPage, OurCoffeePage, ForYourPleasurePage, GoodsPage} from "../pages";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/OurCoffeePage" element={<OurCoffeePage/>}/>
          <Route path="/ForYourPleasurePage" element={<ForYourPleasurePage/>}/>
          <Route path="/GoodsPage" element={<GoodsPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
