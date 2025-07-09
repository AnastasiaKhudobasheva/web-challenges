import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  );

  if (isLoading) return <p>Loading..</p>;
  if (!data) return <p>Not found!</p>;

  return (
    <>
      <h1>{data.name}</h1>
      <p>Price: €{data.price}</p>
      <Link href="/products">← Back to Fishes Menu</Link>
    </>
  );
}
