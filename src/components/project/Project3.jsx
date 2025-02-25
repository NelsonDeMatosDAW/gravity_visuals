import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'; // Import icons

import img from '../../assets/images/layouts/avt-01.png'

Project3.propTypes = {
    data: PropTypes.array
};

function Project3(props) {
    const {data} = props;

    const [showMore, setShowMore] = React.useState(false);

    const visibleData = showMore ? data : data.slice(0, 4);

    return (
        <section className="nft">
            <div className="container">
                <div className="row">
                {visibleData.map((idx) => (
                <div key={idx.id} className="col-xl-3 col-md-6">
                    <div className="nft-item">
                        <div className="card-media">
                            <Link to="#">
                            <img src={idx.img} alt="Productora audiovisual Ponferrada" />
                        </Link>
                    </div>

                    <div className="card-title">
                        <Link to="#" className="h5">
                            {idx.title}
                        </Link>
                    </div>

                    <div className="meta-info">
                        <div className="author">
                            <div className="avatar">
                                <img src={img} alt="Productora audiovisual León" />
                            </div>

                            <div className="info">
                                <span>Creador</span>
                                    <Link to="#" className="h6">
                                        {idx.creator}
                                    </Link>
                            </div>
                        </div>
                        <Link to="#" className="wishlist-button heart">
                            <FontAwesomeIcon icon={faHeart} />{' '}
                            <span className="number-like">{idx.likes}</span>
                        </Link>
                    </div>

                    <div className="card-bottom style-explode">
                        <div className="price">
                            <span className="icon-logo-01"></span>
                                <div className="price-details">
                                    <span>Coste proyecto</span>
                                    <h6>{idx.price}</h6>
                                </div>
                        </div>

                        <div className="button-place-bid">
                            <Link
                                to=""
                                data-toggle="modal"
                                data-target="#popup_bid"
                                className="sc-button"
                            >
                                <span>Saber más</span>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
                </div>
    
                {data.length > 4 && (
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="button-place-bid">
    
                                <Link
                                    className="sc-button"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    <span>{showMore ? 'Ver menos' : 'Ver más'}</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Project3;