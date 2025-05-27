import './Video.css'

function Video() {

    return (
        <div className="container-video-svg">
            <div className='div-video'>
                <video
                    className="video"
                    src='video.mp4'
                    autoPlay
                    controls
                    muted
                    loop
                />
            </div>

            <div className="container-buttons">
                <div className="button1">
                    <button className='svg'>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="presentation"
                            focusable="false"
                            tabIndex="-1"
                        >
                            <path
                                d="M14 8a6 6 0 01-8.256 5.561c-.134-.054-.2-.08-.254-.093a.606.606 0 00-.146-.016c-.055 0-.115.01-.236.03l-2.371.395c-.249.042-.373.062-.463.024a.333.333 0 01-.175-.175c-.038-.09-.018-.214.024-.463l.395-2.371c.02-.12.03-.18.03-.236a.606.606 0 00-.016-.146c-.012-.054-.04-.12-.093-.254A6 6 0 1114 8z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="button2">
                    <button className='svg'>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            svg-inline=""
                            role="presentation"
                            focusable="false"
                            tabindex="-1">
                            <path
                                d="M14 8v2.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C12.48 14 11.92 14 10.8 14H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 12.48 2 11.92 2 10.8V8m8.667-3.333L8 2m0 0L5.333 4.667M8 2v8"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="button3">
                    <button className='svg'>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            svg-inline=""
                            role="presentation"
                            focusable="false"
                            tabindex="-1">
                            <g
                                clip-path="url(#clip0_526_4104)">
                                <path
                                    d="M8 10.667V8m0-2.667h.007M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                            </g>
                            <defs>
                                <clipPath
                                    id="clip0_526_4104">
                                    <path
                                        fill="#fff"
                                        d="M0 0h16v16H0z"
                                    >
                                    </path>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Video;