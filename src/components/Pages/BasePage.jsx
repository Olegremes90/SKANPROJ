import React, {useContext} from 'react';
import BaseHeader from "../header/BaseHeader";
import MainTarif from "../body/MainTarif";
import MainFooter from "../body/MainFooter";
import BodyHead from "../body/BodyHead";
import {authContext} from "../contexts/AuthContext";
import ActiveHeader from "../header/ActiveHeader";
const BasePage = () => {
    const {auth} = useContext(authContext)

    return (
        <div>
            {auth.data ?
                <ActiveHeader/>
           : <BaseHeader/>}
            <BodyHead/>
            <MainTarif/>
            <MainFooter/>
        </div>
    );
};

export default BasePage;