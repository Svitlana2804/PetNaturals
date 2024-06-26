import Logo from "../../../assets/header_logo-1.webp";
import Sky from "../../../assets/noonespillow_Simple_Cloud-2.webp";
import "./Header.scss";
export default function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={Logo} alt="logo"></img>
        <img className="header__sky" src={Sky} alt="sky"></img>
        <nav>
          <a href="#section1">Order</a>
          <a href="#section2">About</a>
          <a href="#section3">Result</a>
        </nav>
      </div>
    </>
  );
}
