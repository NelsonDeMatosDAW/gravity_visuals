import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer/Footer';


import Team1 from '../components/team/Team1';
import dataTeam from '../assets/fake-data/dataTeam';
import Create from '../components/create/Create';
import Partner from '../components/partner/Partner';
import Material from '../components/material/Material';

import equipo_fotografico from '../assets/fake-data/equipo_fotografico';



function Team(props) {
    return (
        <div className='page-team wrapper'>

            <PageTitle title='Nuestro equipo' />

            <Team1 data={dataTeam} />

            <Partner />

            <Create />

            <Material data={equipo_fotografico}/>

            <Footer />
            
        </div>
    );
}

export default Team;