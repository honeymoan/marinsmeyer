import React from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";

export default function IndexMaps(props) {
    const key = process.env.GATSBY_GOOGLE_API_KEY;

    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: key
    })

    const [map, setMap] = React.useState(null);

    const center = {
        lat: -16.697866,
        lng: -49.224277
    };

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerClassName={props.className}
            mapContainerStyle={props.styles}
            center={center}
            zoom={40}
            onLoad={onLoad}
            onUnmount={onUnmount}>
        </GoogleMap>
    ) : <span>loading lol</span>
}
