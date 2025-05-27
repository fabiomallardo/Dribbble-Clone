import './Article+.css';

function ArticlePlus() {
    const data = [
        {
            img: "Article1.webp",
            span: "🚀 FluxCRM -...",
        },
        {
            img: "Article2.webp",
            span: "Taskboard - Ta...",
        },
        {
            img: "Article3.webp",
            span: "Datchs-CRM...",
        },
        {
            img: "Article4.webp",
            span: "Taskuy-Task...",
        }
    ];

    const IconBookmark = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            role="img"
            className="icon"
        >
            <path
                d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
    const IconHeart = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            role="img"
            class="icon ">
            <path
                d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
            </path>
        </svg>
    );

    return (
        <div className="container-img">
            <ul className="card-list">
                {data.map(({ img, span }, index) => (
                    <li key={index} className="card">
                        <div className="image-wrapper">
                            <img src={img} alt={span} />
                            <div className="bottom-overlay">
                                <span className="label">{span}</span>
                                <div className="icons">
                                    <button><IconBookmark /></button>
                                    <button><IconHeart /></button>
                                </div>
                            </div>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default ArticlePlus;
