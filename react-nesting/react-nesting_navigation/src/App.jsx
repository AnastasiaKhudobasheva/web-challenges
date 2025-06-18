import "./styles.css";

import { Header } from "./components/Header.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Link } from "./components/Link.jsx";
import { Logo } from "./components/Logo.jsx";
import { Avatar } from "./components/Avatar.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo></Logo>

        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <Avatar></Avatar>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
