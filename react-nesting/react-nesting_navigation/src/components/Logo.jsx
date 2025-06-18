import { Image } from "./Image.jsx";
import logo from "./img/logo.jpg";

export function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo"></Image>
    </a>
  );
}
