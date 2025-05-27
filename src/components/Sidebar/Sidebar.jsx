import './Sidebar.css';

function Sidebar() {
    return (
        <div className="container-principal">
           <div className="div-photo">
            <img 
            className='photo'
            src="virgolette.webp" 
            alt="" 
            srcset="" />
            </div> 

            <div className="div-text">
                <span className="span-text"><strong> dpopstudio </strong></span>
                <p className="p-text"> Pop your UI Now! SaaS, Dashboard, AI-Powered Master 🔑 </p>
                <button className="button-sidebar"> Get in touch </button>
            </div>
        </div>
    )
}

export default Sidebar;
