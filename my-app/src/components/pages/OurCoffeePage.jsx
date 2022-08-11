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
                        <GoodsList controlIf={true} urlData={"https://62f4ebd9ac59075124c71074.mockapi.io/goods"}/>
                    </>
                )}/>
                <Route path="/:id" element={<Goods location={"OurCoffeePage"}/>}/>
            </Routes>
        </>
    )
}