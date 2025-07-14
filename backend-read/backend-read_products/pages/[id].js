import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);

  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    productData.price = Number(productData.price);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      setIsEditMode(false);
      // Optional: revalidate data manually if needed
      // mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error("Failed to delete product", response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>

        {/*Bonus: Show Reviews if they exist */}
        {data.reviews?.length > 0 && (
          <ReviewsSection>
            <h3>Reviews</h3>
            <ul>
              {data.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.title}</strong> ({review.rating}/5)
                  <p>{review.text}</p>
                </li>
              ))}
            </ul>
          </ReviewsSection>
        )}

        <button type="button" onClick={() => setIsEditMode((prev) => !prev)}>
          {isEditMode ? "Cancel Edit" : "Edit Fish"}
        </button>

        <button type="button" onClick={handleDeleteProduct}>
          Delete Fish
        </button>

        {isEditMode && (
          <ProductForm
            onSubmit={handleEditProduct}
            value={data}
            heading="Edit Fish"
          />
        )}

        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
    </>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

const ReviewsSection = styled.section`
  margin-top: 1rem;
  border-top: 1px solid var(--color-granite);
  padding-top: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  li {
    margin-bottom: 0.75rem;
  }

  strong {
    color: var(--color-earth);
  }
`;
