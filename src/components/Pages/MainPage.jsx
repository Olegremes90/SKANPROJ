import React from 'react';
import ActiveHeader from "../header/ActiveHeader";
import MainTarif from "../body/MainTarif";
import MainFooter from "../body/MainFooter";
import BodyHead from "../body/BodyHead";
const MainPage = () => {
    return (
        <div>
            <ActiveHeader/>
            <BodyHead/>
            <MainTarif/>
            <MainFooter/>
        </div>
    );
};

export default MainPage;