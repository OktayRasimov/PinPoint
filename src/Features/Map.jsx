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
import { getCityData } from "../Data/apiGetCityData";
import { addSelectedCityData } from "./cityDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetCities } from "../Data/useFetchAddedCities";
import UserAbsolute from "../Components/UserAbsolute";

const MapContainerDiv = styled(MapContainer)`
  background-color: inherit;
  width: 70%;
  height: 100%;
  position: relative;
  &leaflet-popup-tip {
    font-size: 3rem;
  }
`;

function Map() {
  const [mapPos, setMapPos] = useState([40, 0]);

  const [lat, lng] = useGetUrlPosition();

  const dispatch = useDispatch();
  const { cities } = GetCities();

  const { data, isLoading, error } = useQuery({
    queryKey: ["CityData", lat],
    queryFn: () => getCityData(lat, lng),
    onError: (e) => console.log(e.message),
  });

  // data && dispatch(addSelectedCityData(data));
  useEffect(
    function () {
      if (data) {
        const { city, countryCode, longitude, latitude, countryName } = data;
        const finalSelectedCityData = {
          message: "",
          city,
          countryCode,
          countryName,
          longitude,
          latitude,
        };
        dispatch(addSelectedCityData(finalSelectedCityData));
      }
    },
    [data, dispatch]
  );

  useEffect(
    function () {
      if (lat && lng) {
        setMapPos([lat, lng]);
        console.log([lat, lng]);
      }
    },
    [lat, lng]
  );

  return (
    <MapContainerDiv center={mapPos} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[data.latitude, data.longitude]} /> */}
      {cities?.map((each) => (
        <Marker position={[each.latitude, each.longitude]} key={each.id}>
          <Popup>{each.message ? each.message : "No Comment Added"}</Popup>
        </Marker>
      ))}
      <SetCenter position={mapPos} />
      <MapClick />
      <UserAbsolute />
    </MapContainerDiv>
  );
}

function SetCenter({ position }) {
  const map = useMap();

  map.flyTo(position);
  // return null;
}

function MapClick() {
  const navigate = useNavigate();

  const map = useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      // map.setView(e.latlng);
    },
  });
}
export default Map;
