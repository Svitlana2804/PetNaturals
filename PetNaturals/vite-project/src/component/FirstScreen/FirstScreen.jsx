import "../FirstScreen/FirstScreen.scss"
import Cat1  from "../../assets/pngegg-1.webp"
import Cat2 from "../../assets/pngegg-2.webp"
import Corm from "../../assets/5-1.webp"
import Header from "./Header/Header"

export default function FirstScreen(){
    return (
      <>
        <section className="firstScreenSection" id="section1">
          <Header />
          <h1 className="firstScreenSection__title">
            Pet Naturals of Vermont, Calming, For Cats
          </h1>
          <div className="firstScreenSection__box">
            <h3>
              Your cat deserves the best pet supplement the world has to offer.
              That's what's in the package.
            </h3>
            <ul className="firstScreenSection__list">
              <li>
                <p>Features a patented calming blend</p>
              </li>
              <li>
                <p>Doesn’t contain herbal ingredients</p>
              </li>
              <li>
                <p>Helps manage everyday stress</p>
              </li>
            </ul>
          </div>
          <div>
            <img className="firstScreenSection__img catOne" src={Cat1} alt="cat1"></img>
            <img className="firstScreenSection__img catTwo" src={Cat2} alt="cat2"></img>
            <img className="firstScreenSection__img corm" src={Corm} alt="corm" ></img>
          </div>
          <div></div>
        </section>
      </>
    );
}