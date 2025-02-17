import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Navigation , Pagination   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

Project.propTypes = {
    data: PropTypes.array
};

function Project(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Videos - Fotos - Diseño Gráfico',
            heading: 'Algunas de nuestras producciones',
            
        }
    )
    return (
        <section className="project" style={{paddingTop: "10vh"}}>
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading" >{dataBlock.heading}</h3>
                        </div>

                        <Swiper
                                className="project-swiper"
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    991: {
                                        slidesPerView: 3,
                                    },
                                }}
                                loop={true}
                                modules={[ Navigation , Pagination ]}
                                navigation
                                pagination={{
                                    clickable: true,
                                }}
                                observer={true}       // 🔹 Observa cambios en el tamaño del Swiper
                                observeParents={true} // 🔹 También observa cambios en los elementos padres
                            >

                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="swiper-slide">
                                                <div className="project-box">
                                                    <div className="image">
                                                        <Link to="/nfts">
                                                        <video
                                                            src={idx.img}
                                                            controls
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                borderRadius: "10px"
                                                            }}
                                                        />
                                                        </Link>
                                                    </div>
                                                    <div className="content">
                                                        <Link to="/nfts" className="h5 title">{idx.title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            
                            </Swiper>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Project;