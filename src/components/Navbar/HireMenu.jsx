import React from 'react';

function HireMenu() {
    const categories = [
        {
            label: "Browse Freelancers",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon ">
                    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            )
        },
        {
            label: "Purchase Services",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon ">
                    <path d="M8 8H8.01M2 5.2L2 9.67451C2 10.1637 2 10.4083 2.05526 10.6385C2.10425 10.8425 2.18506 11.0376 2.29472 11.2166C2.4184 11.4184 2.59135 11.5914 2.93726 11.9373L10.6059 19.6059C11.7939 20.7939 12.388 21.388 13.0729 21.6105C13.6755 21.8063 14.3245 21.8063 14.927 21.6105C15.612 21.388 16.2061 20.7939 17.3941 19.6059L19.6059 17.3941C20.7939 16.2061 21.388 15.612 21.6105 14.927C21.8063 14.3245 21.8063 13.6755 21.6105 13.0729C21.388 12.388 20.7939 11.7939 19.6059 10.6059L11.9373 2.93726C11.5914 2.59135 11.4184 2.4184 11.2166 2.29472C11.0376 2.18506 10.8425 2.10425 10.6385 2.05526C10.4083 2 10.1637 2 9.67452 2L5.2 2C4.0799 2 3.51984 2 3.09202 2.21799C2.7157 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            )
        },

        {
            label: "Submit a Project Brief",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" class="icon ">
                    <g clip-path="url(#clip0_988_526)">
                        <path d="M9.1665 3.33333H5.6665C4.26637 3.33333 3.56631 3.33333 3.03153 3.60582C2.56112 3.8455 2.17867 4.22795 1.93899 4.69836C1.6665 5.23314 1.6665 5.9332 1.6665 7.33333V14.3333C1.6665 15.7335 1.6665 16.4335 1.93899 16.9683C2.17867 17.4387 2.56112 17.8212 3.03153 18.0609C3.56631 18.3333 4.26637 18.3333 5.6665 18.3333H12.6665C14.0666 18.3333 14.7667 18.3333 15.3015 18.0609C15.7719 17.8212 16.1543 17.4387 16.394 16.9683C16.6665 16.4335 16.6665 15.7335 16.6665 14.3333V10.8333M6.66648 13.3333H8.06193C8.46959 13.3333 8.67341 13.3333 8.86522 13.2873C9.03528 13.2465 9.19786 13.1791 9.34698 13.0877C9.51517 12.9847 9.6593 12.8405 9.94755 12.5523L17.9165 4.58334C18.6069 3.89298 18.6069 2.77369 17.9165 2.08333C17.2261 1.39298 16.1069 1.39298 15.4165 2.08333L7.44753 10.0523C7.15928 10.3405 7.01515 10.4847 6.91208 10.6529C6.8207 10.802 6.75336 10.9646 6.71253 11.1346C6.66648 11.3264 6.66648 11.5303 6.66648 11.9379V13.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_988_526">
                            <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            )
        },
        {
            label: "Post a Full-Time Job",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" class="icon ">
                    <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 17H8M16 13H8M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            )
        }

    ]
    return (
        <div className='explore-list'>
            <ul className='dropdown-list2'>
                {categories.map(({label, icon}, index) => (
                    <li key={index}>
                        <button type='button' className='dropdown-option2'>{icon} {label}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HireMenu;