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
import { useEffect } from "react";
import { GetCities } from "../Data/useFetchAddedCities";

const MapContainerDiv = styled(MapContainer)`
  background-color: inherit;
  width: 70%;
  height: 100%;
`;

function Map() {
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

  return (
    <MapContainerDiv center={[42.14, 24.78]} zoom={9} scrollWheelZoom={true}>
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
