import React , {useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';

import logo from '../../assets/images/logo/logo_gv_1.png'


function Footer(props) {

    const [dataBlock] = useState(
        {
            heading: 'Inscribite en nuestra newsletter',
            desc: 'Te avisaremos de lo último en el mundo audiovisual.'
        }
    )

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="footer">
                
                <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer__main">
                                <div className="block-text center">

                                    <h3 className="heading">{dataBlock.heading}</h3>
                                    <p >{dataBlock.desc}</p>
                
                                        
                                </div>
                                <form action="#" className="form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Tu correo electrónico" />
                                        
                                    </div>
                                    <button className="action-btn"><span>Subscribirse</span></button>
                                </form>
                            </div>

                            <div className="footer__bottom">
                                <Link to="/" className="logo"><img src={logo} alt="Cyfonii" /></Link>

                                <div className="center mb--30">
                                    <ul className="list">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">Portfolio</Link></li>
                                        <li><Link to="/equipo">Equipo</Link></li>
                                        <li><Link to="/contacto">Contacto</Link></li>
                                    </ul>
                                    <p>Copyright © 2025, Gravity Visuals. Creado by <a href='https://nelsondematosdesigner.es' target="_blank" rel="noopener noreferrer">Nelson De Matos Designer</a></p>
                                </div>
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

                {
                isVisible && 
                <Link to='#' onClick={scrollToTop}   id="scroll-top"><span className="icon-arrow-top"></span></Link>
            }
            </footer>
    );
}

export default Footer;