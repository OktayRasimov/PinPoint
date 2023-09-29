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

import { useNavigate } from "react-router";
import { useGetUrlPosition } from "../Data/useGetUrlPosition";
import { useQuery } from "@tanstack/react-query";
import { getCityData } from "../Data/useGetCityData";

const MapContainerDiv = styled(MapContainer)`
  background-color: inherit;
  width: 70%;
  height: 100%;
`;

function MapClick() {
  const navigate = useNavigate();

  const map = useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      map.setView(e.latlng);
    },
  });
}

function Map() {
  const [lat, lng] = useGetUrlPosition();

  const {
    data: cityData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["CityData", lat],
    queryFn: () => getCityData(lat, lng),
  });

  console.log(cityData);

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
