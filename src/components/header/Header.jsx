import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

//import logo from '../../assets/images/logo/logo.png'
import logo from '../../assets/images/logo/logo_gv_1.png'

import './styles.scss';

const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (

        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container big">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body">
                            <div className="header__logo">
                                <Link to="/">
                                    <img style={{ maxWidth: '100%', height: 'auto' }} id="site-logo" src={logo} alt='cyfonii' />
                                </Link>
                            </div>

                            <div className="header__right">
                            <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,idx) => (
                                                <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                                
                                                >
                                                    <Link to={data.links}>{data.name}</Link>
                                                    {
                                                        data.namesub &&
                                                        <ul className="sub-menu">
                                                            {
                                                                data.namesub.map((submenu) => (
                                                                    <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                    
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            </div>

                            <div className="header__action">
                                <Link to="/contact" className="action-btn"><span>Join Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;