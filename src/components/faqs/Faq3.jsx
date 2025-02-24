import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap-accordion';

import img from '../../assets/images/layouts/nucifera_2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

Faq3.propTypes = {
    data: PropTypes.array
};

function Faq3(props) {
    const {data} =props;

    //Estado para la pestaña activa
    const [activeTabIndex, setActiveTabIndex] = useState(0);


    //Info del bloque de text
    const [dataBlock] = useState(
        {
            subheading: 'Dudas Frecuentes',
            heading: 'Preguntas frecuentes sobre nuestros servicios',
            desc:'A continuación, se presenta una lista de preguntas frecuentes y nuestras respuestas. Por favor, revisa esta sección de preguntas frecuentes antes de agendar la cita con nosotros.'
            
        }
    )

    const [dataTab] = useState([
        {
            id: 0,
            title: 'Videos',
        },
        {
            id: 1,
            title: 'Fotos',
        },
        {
            id: 2,
            title: 'Diseño Gráfico',
        },
        {
            id: 3,
            title: 'Modelado 3D',
        },
        {
            id: 4,
            title: 'Generales',
        },

    ]);

    //Filtrar los arrays según la categoría
    const questionsByTab = {
        0: data.filter(item => item.category == 'video'),
        1: data.filter(item => item.category == 'foto'),
        2: data.filter(item => item.category == 'diseño'),
        3: data.filter(item => item.category == 'modelo'),
        4: data.filter(item => item.category == 'general'),
    }

    return (
        <section className="faq s3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="block-text" >
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading">{dataBlock.heading}</h3>
                            <p>{dataBlock.desc}</p>
                                
                        </div>
                        <div className="faq__main flat-tabs">

                            <Tabs selectedIndex={activeTabIndex} onSelect={index => setActiveTabIndex(index)}>
                                <TabList className='menu-tab'>
                                    {
                                        dataTab.map(idx => (
                                            <Tab className='fs-14 h6' key={idx.id}>{idx.title}</Tab>
                                        ))
                                    }
                                    
                                </TabList>

                                    {
                                            dataTab.map((tab, idx) => (
                                                <TabPanel key={tab.id} className='content-tab'>
                                                    <div className="content-inner">
                                                        <div className="flat-accordion">
                                                            {(questionsByTab[idx] || data.slice(0, 4)).map(item => (
                                                            <Accordion show={item.show} key={item.id} title={item.title} className="flat-toggle h6">
                                                                <p className="toggle-content">{item.text}</p>
                                                            </Accordion>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            ))
                                        }


                                </Tabs> 

                        </div>                    
                    </div>

                    <div className="col-xl-6 col-md-12">

                        <div className="image" data-aos="fade-left" data-aos-duration="2000">
                            <img 
                                src={img} 
                                alt="Dudas sobre productos audiovisuales, León"
                                style={{width: '100%', height: 'auto'}} 
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Faq3;