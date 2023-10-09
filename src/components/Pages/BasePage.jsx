import React from 'react';
import BaseHeader from "../header/BaseHeader";
import MainTarif from "../body/MainTarif";
import MainFooter from "../body/MainFooter";
import BodyHead from "../body/BodyHead";

const BasePage = () => {
    return (
        <div>
            <BaseHeader/>
            <BodyHead/>
            <MainTarif/>
            <MainFooter/>
        </div>
    );
};

export default BasePage;