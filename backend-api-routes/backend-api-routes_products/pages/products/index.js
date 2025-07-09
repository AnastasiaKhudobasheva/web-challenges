import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Nothing found.</p>;

  return (
    <>
      <h1>Our Fishes</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - €{product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
