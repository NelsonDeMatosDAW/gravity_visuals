import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Partner from '../partner/Partner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';

Team1.propTypes = {
    data: PropTypes.array
};

function Team1(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Nuestro equipo',
            heading: 'Detrás de Gravity Visual',
        }
    )

    return (
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading pd">{dataBlock.heading}</h3>
                        </div>

                        <Swiper
                            className="team-swiper"
                            spaceBetween={10}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,  // 1 slide en pantallas pequeñas
                                },
                                768: {
                                    slidesPerView: 2,  // 2 slides en pantallas medianas (tablet o más grandes)
                                },
                                1024: {
                                    slidesPerView: 2,  // 2 slides en pantallas grandes (computadoras de escritorio)
                                },
                            }}
                            loop={false}
                        >
                            {data.length > 0 ? (
                            data.map((idx) => (
                                <SwiperSlide key={idx.id}>
                                    <div className="swiper-slide">
                                        <div className="team-box">
                                            <div className="image">
                                            <Link to="#">
                                                <img src={idx.img} alt={idx.name} />
                                            </Link>
                                            </div>
                                            <div className="content">
                                                <Link to="#" className="h5 name">{idx.name}</Link>
                                                <p className="position">{idx.position}</p>

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
                                </SwiperSlide>
                                ))
                            ) : (
                                <p>No hay miembros del equipo para mostrar.</p>
                            )}
                        </Swiper>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team1;