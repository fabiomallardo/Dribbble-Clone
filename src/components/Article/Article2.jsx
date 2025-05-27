import './Article2.css';

function Article2() {
  return (
    <div className="container-article2">
      <div className="container-title2">
        <div className="title-article2">
          <span className="span-article2">
            <strong>Services by Ridwan Saputra</strong>
          </span>
        </div>
        <div className="profile-article2">
          <p className="p-article2">View all services</p>
        </div>
      </div>

      <div className="container-video-img">
        <div className="media-block">
          <video
            className="video2"
            src="Article5.mp4"
            loop
            muted
            autoPlay
          ></video>
          <div className="span-price">
            <span className="span-video">
              <strong>Design Retainer Weekly</strong>
            </span>
            <p className="price">$450</p>
          </div>
        </div>

        <div className="media-block">
          <img src="Article6.webp" alt="Dashboard UI" className="img-article" />
          <div className="span-price">
            <span className="span-video">
              <strong>High Quality Dashboard Product UI</strong>
            </span>
            <p className="price">$499</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article2;
