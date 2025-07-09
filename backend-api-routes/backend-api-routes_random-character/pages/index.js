import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load character.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
      <h1>Random Character</h1>
      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Twitter: {data.twitter}</p>
      <p>Age: {data.age}</p>
      <p>Profession: {data.profession}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
