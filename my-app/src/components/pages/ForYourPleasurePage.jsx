import { Route, Routes } from "react-router-dom";

import MinorHeader from "../minorHeader";
import AboutOurBeans from "../aboutOurBeans";
import GoodsList from "../goodsList";
import Goods from "../goods";

export default function ForYourPleasurePage() {
    return (
        <>
            <MinorHeader backgroundImageMod={false}/>
            <Routes>
                <Route path="/" element={(
                    <>
                        <AboutOurBeans fotoMod={false}/>
                        <GoodsList controlIf={false} urlData={"https://62f8d7563eab3503d1dc1d9a.mockapi.io/coffeehouse?page=1&limit=6"}/>
                    </>
                )}/>
                <Route path="/:id" element={<Goods location={"ForYourPleasurePage"}/>}/>
            </Routes>
        </>
    )
}