import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

function NavItem({ link, name }) {
    return (
        <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
            <div className="svg-wrapper">
                <svg height={60} width={104} xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height={60} width={104} />
                </svg><div className="text">{name}</div>
            </div>
        </Link>
    )
}

export default NavItem
