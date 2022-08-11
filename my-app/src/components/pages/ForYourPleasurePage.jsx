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
                        <GoodsList controlIf={false} urlData={"https://62f4ebd9ac59075124c71074.mockapi.io/goods2"}/>
                    </>
                )}/>
                <Route path="/:id" element={<Goods location={"ForYourPleasurePage"}/>}/>
            </Routes>
        </>
    )
}