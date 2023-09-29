import styled from "styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetUrlPosition } from "../Data/useGetUrlPosition";

const MapContainerDiv = styled(MapContainer)`
  background-color: inherit;
  width: 70%;
  height: 100%;
`;

function MapClick() {
  const navigate = useNavigate();
  const map = useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      map.setView(e.latlng);
    },
  });
}

function Map() {
  const [lat, lng] = useGetUrlPosition();

  useEffect(
    function () {
      async function getCity() {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        console.log(data);
      }
      getCity();
    },
    [lat, lng]
  );

  return (
    <MapContainerDiv center={[42.14, 24.78]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapClick />
    </MapContainerDiv>
  );
}

export default Map;
