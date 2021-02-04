import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <div className="container2">
            <div className="box2">
                <video src="video/07.0.mp4" poster='images/07.01.jpg' />
                {/* <span>CSS</span> */}
            </div>
            <div className="box2">
                <img src="images/1.1.jpg" />
                {/* <span>Image</span> */}
            </div>
            <div className="box2">
                <img src="https://source.unsplash.com/1000x804" />
                {/* <span>Hover</span> */}
            </div>
            <div className="box2">
                <img src="https://source.unsplash.com/1000x806" />
                {/* <span>Effect</span> */}
            </div>
            <div className="box2">
                <img src="https://source.unsplash.com/1000x806" />
                {/* <span>Effect</span> */}
            </div>
            <div className="box2">
                <img src="https://source.unsplash.com/1000x806" />
                {/* <span>Effect</span> */}
            </div>
        </div>
    )
}

export default Gallery
