import React from 'react';

function DropdownButton ({ label, isOpen, onClick }) {
    return (
        <button type='button' className='category-button' onClick={onClick}>
            {label} {isOpen ? <span className='caret'>▴</span> : <span className='caret'>▾</span>}
        </button>
    )
}

export default DropdownButton