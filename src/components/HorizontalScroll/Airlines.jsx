import React from 'react';
import HorizontalScroll from './HorizontalScroll';

import airIndia from '../../assets/airline/AirIndia.svg';
import bimanBangladesh from '../../assets/airline/Biman-bangladesh.svg';
import cathayPacific from '../../assets/airline/Cathay_Pacific-Logo 1.svg';
import chinaSouthern from '../../assets/airline/ChinaSoutern.svg';
import emirates from '../../assets/airline/Emirates.svg';
import etihad from '../../assets/airline/Etihad.svg';

import flyDubai from '../../assets/airline/FlyDubai-Logo 1.svg';
import kuwaitAirline from '../../assets/airline/KuwaitAirline.svg';
import malaysia from '../../assets/airline/Malaysia.svg';
import omanAir from '../../assets/airline/Oman_Air-Logo 1.svg';
import qatar from '../../assets/airline/Qatar.svg';
import srilankaAirlline from '../../assets/airline/SrilankanAriline.svg';

import thaiAirline from '../../assets/airline/ThaiAirline.svg';
import turkish from '../../assets/airline/Turkish.svg';
import vistara from '../../assets/airline/Vistara.svg';





const Airlines = () => {
    return (
        <HorizontalScroll>
            <img src={airIndia} alt="Air-India" />
            <img src={bimanBangladesh} alt="Biman-Bangladesh" />
            <img src={cathayPacific} alt="Cathay-Pacific" />
            <img src={chinaSouthern} alt="China-Southern" />
            <img src={emirates} alt="Emirates" />
            <img src={etihad} alt="Etihad" />
            <img src={flyDubai} alt="Fly-Dubai" />
            <img src={kuwaitAirline} alt="Kuwait-Airline" />
            <img src={malaysia} alt="Malaysia" />
            <img src={omanAir} alt="Oman-Air" />
            <img src={qatar} alt="Qatar-Airways" />
            <img src={srilankaAirlline} alt="Srilanka-Airline" />
            <img src={thaiAirline} alt="Thai-Airline" />
            <img src={turkish} alt="Turkish-Airline" />
            <img src={vistara} alt="Vistara-Airline" />
        </HorizontalScroll>
    )
}

export default Airlines;