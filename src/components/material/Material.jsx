import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';


import line from '../../assets/images/background/line-2.png'



function Material(props) {

    const {data} = props
    return (
        <section className="photo s2">
                    <div className="shape right"></div>
                    <img src={line} alt="" className="img-line" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>Fotografía</span></h6>
                                    <h3 className="heading wow" data-splitting>El material con el que
                                        <br />
                                        trabajamos</h3>
                                </div>

                            </div>

                            {
                                data.slice(4,11).map(idx => (
                                    <div key={idx.id} className="col-xl-3 col-md-6">
                                        <div className="photo-box">
                                            <div className="image">
                                                <Link to="/team">
                                                    <img src={idx.img} alt="Videos y fotos León" />
                                                </Link>

                                                <ul className="list-social">
                                                    <li><Link to="https://www.instagram.com/gravity_visualss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                                            <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: 'black' }}/>
                                                    </Link></li>
                                                    <li><Link to="https://www.tiktok.com/@gravity_visualss" target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={faTiktok} size="lg" style={{ color: 'black' }}/>
                                                    </Link></li>
                                                    <li><Link to="https://es.pinterest.com/gravity_visualss/" target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={faPinterest} size="lg" style={{ color: 'black' }}/>
                                                    </Link></li>
                                                </ul>
                                            </div>
                                            <div className="content">
                                                <Link to="/team" className="h5 name">{idx.name}</Link>
                                                <p className="postion">
                                                    {idx.position}
                                                </p>

                                                
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            

                            

                        </div>

                    
                    </div>
                </section>
    );
}

export default Material;