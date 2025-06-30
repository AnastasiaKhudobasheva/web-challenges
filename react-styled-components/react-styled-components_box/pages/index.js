import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";
const BoxForm = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <BoxForm>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </BoxForm>
  );
}
