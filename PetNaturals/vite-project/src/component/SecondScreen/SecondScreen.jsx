import "./SecondScreen.scss";
import Sleep from "../../assets/sleep.webp";
import Lacom from "../../assets/lacom.webp";
import Logo2 from "../../assets/logo2.webp";
export default function SecondScreen() {
  return (
    <>
      <section className="secondScreenSection" id="section2">
        <h2 className="secondScreenSection__title">From the manufacturer</h2>
        <div className="secondScreenSection__container">
          <div className="secondScreenSection__box">
            <img
              className="secondScreenSection__img"
              src={Sleep}
              alt="cat-sleep"
            ></img>
            <div  className="secondScreenSection__info">
              <h3 className="secondScreenSection__info_title">
                Keep Calm and Carry On
              </h3>
              <p className="secondScreenSection__info_text">
                Are you searching for a better way to ease your pet’s separation
                anxiety or stress? Calming chews help relieve pet stress without
                corn, wheat or artificial ingredients.
              </p>
            </div>
          </div>
          <div className="secondScreenSection__box">
            <img
              className="secondScreenSection__img"
              src={Logo2}
              alt="logo2"
            ></img>
            <div className="secondScreenSection__info">
              <h3 className="secondScreenSection__info_title">Peace of Mind</h3>
              <p className="secondScreenSection__info_text">
                Pet Naturals of Vermont’s research-backed formula makes it safe
                to double or triple the amount in times of added stress.
              </p>
            </div>
          </div>
          <div className="secondScreenSection__box">
            <img
              className="secondScreenSection__img"
              src={Lacom}
              alt="lacom"
            ></img>
            <div className="secondScreenSection__info">
              <h3 className="secondScreenSection__info_title">
                More than a Tasty Treat
              </h3>
              <p className="secondScreenSection__info_text">
                Don’t let its satisfying chicken liver flavor fool you.
                Technically, Calming isn’t a treat but it sure tastes like one.
                Reward your best buddy with a Calming chew.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
