import React , {useState} from 'react';
import Button from '../button/Button';

import img from '../../assets/images/layouts/logo_400.png'



function Create(props) {

    
    const [dataBlock] = useState(
        {
            heading: 'Contacta con nosotros',
            desc: 'Agenda una cita y cuentanos tu proyecto audiovisual.',
            
        }
    )
    return (
        <section className="create">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="create__main">
                                <div className="content">
                                    <h4 className="heading">{dataBlock.heading}</h4>
                                    <p>{dataBlock.desc}</p>
                                    <Button title='Contacta' link='/contacto' />
                                
                                </div>
                                <img src={img} alt="Videos León" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Create;