import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button  from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';
import {auth} from './Firebase'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
        const [presentUser, setPresentUser] = useState(null);



useEffect(() => {
    auth.onAuthStateChanged(user => {
        if (user) {
        setPresentUser({
            uid: user.uid,
            email: user.email
        })
    }
    else {
        setPresentUser(null);
    }
    })
}, [])

    const handleClick = () => setClick 
    (!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
        };

        const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
        };
        

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Skill Builder
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                       </li>     
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;