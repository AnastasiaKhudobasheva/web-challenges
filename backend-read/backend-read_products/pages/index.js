import ProductList from "@/components/ProductList";
import styled from "styled-components";
import ProductForm from "@/components/ProductForm";
import useSWR from "swr";

export default function HomePage() {
  const { data, mutate } = useSWR("/api/products");

  async function handleAddProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    productData.price = Number(productData.price);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      event.target.reset();
    }
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm
        onSubmit={handleAddProduct}
        value={null}
        heading="Add a new Fish"
      />
      <hr />
      <ProductList products={data} />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
