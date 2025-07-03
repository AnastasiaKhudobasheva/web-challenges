// import { useEffect, useState } from "react";

import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// fetcher function (used by SWR)

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch ISS data");
    return res.json();
  });

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // SWR handles fetching, caching, revalidating

  const { data, isLoading, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  // returns an object that includes:
  // data: The actual result (with latitude and longitude)
  // isLoading: Whether it's still loading
  // error: If anything went wrong
  // mutate: special function that says: "re-fetch this now"
  // auto-fetch every 5 seconds

  if (error) return <div>Error loading ISS data.</div>;
  if (isLoading) return <div>Loading ISS data...</div>;

  const { latitude, longitude } = data || {};

  return (
    <main>
      <Map latitude={latitude} longitude={longitude} />
      <Controls
        latitude={latitude}
        longitude={longitude}
        onRefresh={() => mutate()} // clean way to manually refresh
      />
    </main>
  );
}
