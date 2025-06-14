import './Sidebar2.css';

function Sidebar2() {
    return (
        <div className="keyboard-button">
            <button
                className='keyboard'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none" role="img" class="icon keyboard-button-icon">
                    <g filter="url(#filter0_d)">
                        <rect y="0.865234" width="22" height="22" rx="5" fill="white"></rect>
                        <path d="M8.27 14.8652H13.77V13.5342H9.788V6.68123H8.27V14.8652Z" fill="#9E9EA7"></path>
                        <rect x="0.5" y="1.36523" width="21" height="21" rx="4.5" stroke="#DBDADE"></rect>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0.865234" width="22" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset dy="2"></feOffset>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 1 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </button>
            <button
                className='keyboard'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none" role="img" class="icon keyboard-button-icon">
                    <g filter="url(#filter0_d)">
                        <rect y="0.865234" width="22" height="22" rx="5" fill="white"></rect>
                        <path d="M13.363 11.3562V10.0912H9.788V7.99023H14.078V6.68123H8.27V14.8652H9.788V11.3562H13.363Z" fill="#9E9EA7"></path>
                        <rect x="0.5" y="1.36523" width="21" height="21" rx="4.5" stroke="#DBDADE"></rect>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0.865234" width="22" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                            <feOffset dy="2"></feOffset>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 1 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </button>
            <p className='like'>Like</p>
        </div>
    )
}

export default Sidebar2;
