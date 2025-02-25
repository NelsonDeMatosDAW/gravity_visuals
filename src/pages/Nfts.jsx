import React from 'react';

import Footer from '../components/footer/Footer';
import PageTitle from '../components/pagetitle/PageTitle';

import Project3 from '../components/project/Project3';
import dataProject_videoclips from '../assets/fake-data/dataProject_videoclips';
import dataProject_videos from '../assets/fake-data/dataProject_videos';
import dataProject_fotos from '../assets/fake-data/dataProject_fotos';

import { Link } from 'react-router-dom';

function Nfts(props) {
    return (
        <div className='wrapper-nft'>

            <PageTitle title='NFTs Audiovisuales' />
        

                    {/* Videoclips */}
                    <div className="card-title-nft">
                        <Link to="#" className="h2">Videoclips</Link>
                    </div>
                    <Project3 data={dataProject_videoclips} />ç

                    {/* videos general */}
                    <div className="card-title-nft">
                        <Link to="#" className="h2">Videos</Link>
                    </div>
                    <Project3 data={dataProject_videos} />

                    {/* Shooting */}
                    <div className="card-title-nft">
                        <Link to="#" className="h2">Shootings</Link>
                    </div>
                    <Project3 data={dataProject_fotos} />



            <Footer />
            
        </div>
    );
}

export default Nfts;