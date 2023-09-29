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
import { addSelectedCityData } from "./cityDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MapContainerDiv = styled(MapContainer)`
  background-color: inherit;
  width: 70%;
  height: 100%;
`;

function Map() {
  const [lat, lng] = useGetUrlPosition();
  const { selectedCityData } = useSelector((state) => state.cityData);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["CityData", lat],
    queryFn: () => getCityData(lat, lng),
    onError: (e) => console.log(e.message),
  });

  // data && dispatch(addSelectedCityData(data));
  useEffect(
    function () {
      if (data) {
        const { city, countryCode, longitude, latitude } = data;
        const finalSelectedCityData = {
          message: "",
          city,
          countryCode,
          longitude,
          latitude,
        };
        dispatch(addSelectedCityData(finalSelectedCityData));
      }
    },
    [data, dispatch]
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

function MapClick() {
  const navigate = useNavigate();

  const map = useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      map.setView(e.latlng);
    },
  });
}
export default Map;
