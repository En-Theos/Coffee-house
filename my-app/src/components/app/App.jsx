import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../footer";
import { MainPage, OurCoffeePage, ForYourPleasurePage} from "../pages";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="OurCoffeePage/*" element={<OurCoffeePage/>}/>
          <Route path="ForYourPleasurePage/*" element={<ForYourPleasurePage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
