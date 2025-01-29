import React , {useState} from 'react';

import img1 from '../../assets/images/layouts/mazu-nosotros.jpg'
import img2 from '../../assets/images/layouts/mazu2-nosotros.jpg'
import img3 from '../../assets/images/layouts/MD-nosotros.jpg'
import img4 from '../../assets/images/layouts/V-nosotros.jpg'
import img5 from '../../assets/images/layouts/V2-nosotros.JPG'
import Button from '../button/Button';



function About(props) {

    const [dataImg] = useState([
        {
            id: 1,
            img : img1,
            class: 'img1'
        },
        {
            id: 2,
            img : img2,
            class: 'img2'
        },
        {
            id: 3,
            img : img3,
            class: 'img3'
        },
        {
            id: 4,
            img : img4,
            class: 'img4'
        },
        {
            id: 5,
            img : img5,
            class: 'img5'
        },
    ])

    const [dataBlock] = useState(
        {
            subheading: 'Nosootros',
            heading: 'Productora audiovisual en León',
            desc1: '¿Quieres hacer crecer tu negocio? Nosotros te ayudamos.' ,
            desc2 :'Gravity_Visuals es una productora audiovisual con más de 3 años de experiencia, especializada en la creación de contenido audiovisual impactante para empresas, marcas y particulares. Trabajamos en Ponferrada, León, Salamanca, Lugo, Coruña y Vigo. Nos dedicamos a crear tus piezas audiovisuales (video y fotografía) adaptadas a tus necesidades, capturando momentos que cuentan historias.'

        }
    )
    return (
        <section className="about">
                <div className="shape"></div>
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    {
                                        dataImg.map(idx => (
                                            <img key={idx.id} className={idx.class} src={idx.img} alt="Productora audiovisual en Ponferrada" />
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text" >
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading">{dataBlock.heading}</h3>
                                    <p className="mb-17">{dataBlock.desc1}</p>
                                    <p className="mb-26">{dataBlock.desc2}</p>
                                    <Button link='/about' title='Más sobre nosotros' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default About;