import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';

PageTitle.propTypes = {
    
};

function PageTitle(props) {
    const {title} = props
    return (
        <section className="page-title">
        <div className="shape"></div>
        <div className="shape right s3"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="page-title__body">
                        <div className="page-title__main">
                            <h4 className="title">{title}</h4>
    
                            <ul className="breacrumb">
                                <li><p>Gravity visuals</p></li>
                            </ul>
                            <div className="bottom">
                                <p>Siguenos</p>
    
                                <ul className="list-social">
                                    <li>
                                        <a href="https://www.instagram.com/gravity_visualss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/634851459?text=Hola,%20me%20gustaría%20agendar%20una%20reunión%20para%20hablar%20de%20mi%20proyecto%20audiovisual" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tiktok.com/@gravity_visualss" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faTiktok} size="lg"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://es.pinterest.com/gravity_visualss/" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faPinterest} size="lg"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PageTitle;