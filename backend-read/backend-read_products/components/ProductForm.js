import styled from "styled-components";
import StyledButton from "@/components/Button";

export default function ProductForm({ onSubmit, value, heading }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{heading}</StyledHeading>

      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" defaultValue={value?.name} />
      </StyledLabel>

      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={value?.description}
        />
      </StyledLabel>

      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          defaultValue={value?.price}
        />
      </StyledLabel>

      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency" defaultValue={value?.currency}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
