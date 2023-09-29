import { useGetUrlPosition } from "./useGetUrlPosition";

// const [lat, lng] = useGetUrlPosition();

// useEffect(
//   function () {
//     async function getCity() {
//       const res = await fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//       );
//       const data = await res.json();
//       console.log(data);
//     }
//     getCity();
//   },
//   [lat, lng]
// );

export async function getCityData(lat, lng) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );

  const data = res.json();

  return data;
}
