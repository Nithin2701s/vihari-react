import React from 'react';
import '../CSS/Gallery.css';

const Gallery = () => {
    const destinations = [
        { name: 'Mumbai', image: '../Mumbai.jpg' },
        { name: 'Chennai', image: '../Chennai.jpg' },
        { name: 'Delhi', image: '../Delhi.jpg' },
        { name: 'Hyderabad', image: '../Hyderabad.jpg' },
        { name: 'Goa', image: '../Goa.jpg' },
        { name: 'Bangalore', image: '../Bangalore.jpg' },
    ];
    return (
        <section id="gallery" className="gallery">
            <div className="container gallery-container">
                <div className="gallery-details">
                    <div className="gallary-header text-center">
                        <h2>Top Destination Places in INDIA</h2>
                    </div>
                    <div className="gallery-box">
                        <div className="gallery-content">
                            <div className="filtr-container">
                                <div className="row">
                                    {/* First Row */}
                                    <div className="col-md-6">
                                        <div className="filtr-item">
                                            <img src={destinations[0].image} alt={destinations[0].name} />
                                            <div className="item-title">
                                                <a href=" ">{destinations[0].name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="filtr-item">
                                            <img src={destinations[1].image} alt={destinations[0].name} />
                                            <div className="item-title">
                                                <a href=" ">{destinations[1].name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Second Row */}
                                    <div className="col-md-4">
                                        <div className="filtr-item">
                                            <img src={destinations[2].image} alt={destinations[0].name} />
                                            <div className="item-title">
                                                <a href=" ">{destinations[2].name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{ marginBottom: '500px' }}>
                                        <div className="filtr-item">
                                            <img src={destinations[3].image} alt={destinations[0].name} />
                                            <div className="item-title">
                                                <a href=" ">{destinations[3].name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{ marginBottom: '500px' }}>
                                        <div className="filtr-item">
                                            <img src={destinations[4].image} alt={destinations[0].name} />
                                            <div className="item-title">
                                                <a href=" ">{destinations[4].name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8" style={{ marginLeft: '350px', marginTop: '-500px' }}>
                                        <div className="filtr-item">
                                            <img src={destinations[5].image} alt={destinations[0].name} />
                                            <div className="item-title">
                                                <a href=" ">{destinations[5].name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;