import React from 'react';

function DropdownMenu() {
    return (
        <ul className='dropdown-list'>
            <li><button type='button' className='dropdown-option'><strong>Shots</strong></button></li>
            <li><button type='button' className='dropdown-option'>Designers</button></li>
            <li><button type='button' className='dropdown-option'>Services</button></li>
        </ul>
    )
}

export default DropdownMenu;