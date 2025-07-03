// import { useEffect, useState } from "react";
import { useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

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

  const [refreshIndex, setRefreshIndex] = useState(0);

  // Include refreshIndex in key so when it changes, SWR refetches
  const { data, error, isLoading } = useSWR(
    [URL, refreshIndex],
    () => fetcher(URL),
    {
      refreshInterval: 5000,
    }
  );

  if (error) return <div>Error loading ISS data.</div>;
  if (isLoading) return <div>Loading ISS data...</div>;

  const { latitude, longitude } = data || {};

  return (
    <main>
      <Map latitude={latitude} longitude={longitude} />
      <Controls
        latitude={latitude}
        longitude={longitude}
        onRefresh={() => setRefreshIndex((prev) => prev + 1)} // increments to trigger re-fetch
      />
    </main>
  );
}
