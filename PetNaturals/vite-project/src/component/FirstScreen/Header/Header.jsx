import Logo from "../../../assets/header_logo-1.webp"
import "./Header.scss"
export default function Header() {
    return (
        <>
            <div className="header">
                <img src={Logo} alt="logo"></img>
          <ul>
            <li>Order</li>
            <li>About</li>
            <li>Result</li>
          </ul>
            </div>
        </>
    )
}