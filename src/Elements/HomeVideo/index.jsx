import "./HomeVideo.css";

const HomeVideo = () => {
    return (
        <div className="homeVideoDiv">
            {/* Background Video */}
            <video 
                className="video"
                autoPlay 
                muted 
                loop 
                src="/video1.mp4"
            />
            <div className="overlayVideo"></div>
        </div>
    );
}

export default HomeVideo;
