import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './Location.sass';
import image from '../../assets/images/top.png';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 49.04315004202703,
    lng: 27.227335304157975,
};

const { REACT_APP_LOC } = process.env;

const Location = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${REACT_APP_LOC}`,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback((map: any) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(() => {
        setMap(null);
    }, []);

    return (
        <section id="contacts" className="location">
            <div className="location-content">
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={33}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                ) : (
                    <p>Loading....</p>
                )}
                <div className="location-contacts contacts">
                    <div className="title contacts-title">
                        <span className="title-decor contacts-title__decor">
                            Contacts
                        </span>
                        <h2 className="title-text contacts-title__text">
                            Contacts
                        </h2>
                    </div>
                    <div className="contacts-wrap">
                        <div className="contacts-info">
                            <p className="contacts-text">
                                <span className="contacts-text__legend">
                                    Address:
                                </span>
                                <span className="contacts-text__desc">
                                    Vinkivtsi
                                </span>
                            </p>
                            <p className="contacts-text">
                                <span className="contacts-text__legend">
                                    Opening hours:
                                </span>
                                <span className="contacts-text__desc">
                                    9:00 - 0:00
                                </span>
                            </p>
                        </div>
                        <img className="contacts-img" src={image} alt="pizza" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
