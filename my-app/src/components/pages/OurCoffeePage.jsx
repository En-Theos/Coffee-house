import { Route, Routes } from "react-router-dom";

import MinorHeader from "../minorHeader";
import AboutOurBeans from "../aboutOurBeans";
import GoodsList from "../goodsList";
import Goods from "../goods";

export default function OurCoffeePage() {
    return (
        <>
            <MinorHeader backgroundImageMod={true}/>
            <Routes>
                <Route path="/" element={(
                    <>
                        <AboutOurBeans fotoMod={true}/>
                        <GoodsList controlIf={true} urlData={"https://62f8d7563eab3503d1dc1d9a.mockapi.io/coffeehouse?page=2&limit=6"}/>
                    </>
                )}/>
                <Route path="/:id" element={<Goods location={"OurCoffeePage"}/>}/>
            </Routes>
        </>
    )
}