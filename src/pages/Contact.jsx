import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Faq3 from '../components/faqs/Faq3';
import dataFaqs from '../assets/fake-data/data-faq';
import Footer from '../components/footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


import img from '../assets/images/logo/GV_sin_fondo.png'

function Contact(props) {
    return (
        <div className='wrapper'>

            <PageTitle title='Contacto' />

            <section className="touch">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Cuentanos tus proyectos!</span></h6>
                                <h3 className="heading">Comencemos a trabajar<br />
                                    juntos
                                    </h3>
                            </div>
                            <div className="touch__main">
                                <div className="info" >
                                    <h5>Datos de contacto</h5>
                                    <ul className="list">
                                        <li>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', width: '16px', height: '16px' }}/>
                                            <p>C/Ronda Norte 26, Ponferrada (León), 24404</p>                                        
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faPhone} style={{ color: 'white', width: '16px', height: '16px' }}/>
                                            <p>+34 638 85 14 59</p>
                                                
                                        </li>
                                        <li>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', width: '16px', height: '16px' }}/>
                                            <p>administrador@gravityvisuals.es</p>                                        
                                        </li>
                                    </ul>

                                    <div className="image"
                                    >
                                        <img 
                                            src={img}
                                            alt="Contacta con una productora audiovisual en León, Ponferrada, Coruña, Vigo" 
                                            style={{width: '100%', height: 'auto', maxWidth: '300px'}}
                                        />
                                    </div>
                                </div>

                                <form action="#" className="form-box">
                                    <div className="row">
                                        <div className="col">
                                            <label >Tu nombre</label>
                                        <input type="text" className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label >Tu email</label>
                                        <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label >Tu teléfono</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label >Servicio</label>
                                            <select className="form-control">
                                                <option>Video</option>
                                                <option>Foto</option>
                                                <option>Diseño gráfico</option>
                                                <option>Modelado 3D</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label >Tu mensaje</label>
                                            <textarea name="mess" id="mess" cols="30" rows="10"></textarea>
                                        </div>
            
                                    </div>
                                    <div className="row mb-0">
                                        <div className="col">
                                            <button className="action-btn"><span>Enviar</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map">
                <div className="container">
                    <div className="row">
                        <div className="map__main">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.978077801173!2d-6.58970234951783!3d42.54045307918661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd355e4f53c83bf1%3A0xe62c669ac0de84c!2sRonda%20del%20Norte%2026%2C%2024404%20Ponferrada%2C%20Le%C3%B3n%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1677007067070!5m2!1ses!2ses" 
                                title="map" 
                                height="600" 
                                allowFullScreen="" 
                                aria-hidden="false" 
                                tabIndex="0" 
                            />
                        </div>
                    </div>
                </div>
            </div>



            <Faq3 data={dataFaqs} />

            <Footer />


            
        </div>
    );
}

export default Contact;