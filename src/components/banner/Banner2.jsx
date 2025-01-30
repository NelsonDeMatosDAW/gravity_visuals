import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { EffectCoverflow ,Autoplay , Pagination , Navigation } from "swiper";
import Button from '../button/Button';

Banner2.propTypes = {
    data: PropTypes.array
};

function Banner2(props) {
    const {data} = props;

    {/** Datos del Tiulo del Banner */}
    const [dataBlock] = useState(
        {
            subheading: 'Creación de contenido audiovisual en el Bierzo',
            heading: 'Videografía y fotografía en el Bierzo.',
            desc:'¡Bienvenidos a Gravity Visuals! Productora audiovisual.'
        }
    )

    //estado para el video de fondo
    const [videoSrc, setVideoSrc] = useState('/assets/videos/Ibiza_cambios.mp4');

    const handleSlideChange = (swiper) => {
        const currentSlideIndex = swiper.activeIndex % data.length; // Asegura que el índice esté dentro del rango
    
        // Comprobamos si el índice es válido y si tiene una propiedad 'videoSrc'
        const newVideoSrc = (data[currentSlideIndex] && data[currentSlideIndex].videoSrc)
            ? data[currentSlideIndex].videoSrc
            : '/assets/videos/Ibiza_cambios.mp4'; // Fallback si no tiene videoSrc
    
        console.log("New Video Source: ", newVideoSrc); // Verifica el video a utilizar
        setVideoSrc(newVideoSrc);
    }


    return (
                <section className="banner s2">

                    {/** Video de fondo */}
                    <div className="video-background">
                        <video key={videoSrc} autoPlay loop muted className="video-background-video">
                            <source src={videoSrc} type="video/mp4" />
                            Tu navegador no soporta la etiqueta de video.
                        </video>
                    </div>

                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center">

                                {/** Mostramos la información del título */}
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h1 className="heading pd">{dataBlock.heading}</h1>
                                        <p className="mb-34">{dataBlock.desc}</p>
                                        
                                        <Button title='Contacto' link='/contact' />
                                </div>

                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        500: {
                                            slidesPerView: 2,
                                            },
                                        700: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    coverflowEffect={{
                                    rotate: 30,
                                    stretch: 15,
                                    depth: 320,
                                    modifier: 1,
                                    slideShadows: false,
                                    }}
                                    // loop={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                        }}
                                    onSlideChange={handleSlideChange} //escucha el cambio del slide
                                    modules= {[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                    className="bannerSwiper"
                                >

                                    {
                                        data.map(idx => (
                                            <SwiperSlide key={idx.id}>
                                                <div className="card-box" >
                                                        <div className="top d-flex">
                                                            <span className="icon-logo-01"></span>
                                                            <div>
                                                                <h6>{idx.title}</h6>
                                                                <h6 className="price">{idx.price}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="image">
                                                                <img src={idx.img} alt="Cyfonii" />
                                                            </div>
                            
                                                            <div className="info d-flex">
                                                                <img src={idx.avt} alt="Cyfonii" />
                            
                                                                <div >
                                                                    <h6 className="name">{idx.name}</h6>
                                                                    <p>{idx.tag}</p>
                                                                </div>
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

export default Banner2;