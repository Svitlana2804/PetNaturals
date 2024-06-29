import "../../css/FirstScreen.scss";
import Cat1 from "../../assets/pngegg-1.webp";
import Cat2 from "../../assets/pngegg-2.webp";
import Corm from "../../assets/5-1.webp";
import Header from "./Header/Header";
import InputMask from "react-input-mask";
import React, { useEffect } from "react";
export default function FirstScreen() {
  useEffect(() => {
    const todayDateElement = document.getElementById("today");
    console.log(todayDateElement);
    if (todayDateElement) {
      const today = new Date();
      const options = { day: "numeric", month: "numeric", year: "numeric" };
      const todayFormatted = today.toLocaleDateString("uk-UA", options);
      todayDateElement.innerText = `Order date: ${todayFormatted}`;
    } else {
      console.error("Element with ID 'today' not found.");
    }
  }, []);

  return (
    <>
      <section className="firstScreenSection" id="section1">
        <Header />
        <h1 className="firstScreenSection__title">
          Pet Naturals of Vermont, Calming, For Cats
        </h1>
        <div className="firstScreenSection__flex">
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
          <div className="firstScreenSection__card">
            <img
              className="firstScreenSection__img catOne"
              src={Cat1}
              alt="cat1"
            ></img>
            <img
              className="firstScreenSection__img catTwo"
              src={Cat2}
              alt="cat2"
            ></img>
            <img
              className="firstScreenSection__img corm"
              src={Corm}
              alt="corm"
            ></img>
          </div>
          <div className="firstScreenSection__form">
            <div className="firstScreenSection__form_top">
              <h2 className="firstScreenSection__form_top_title">TIME LEFT</h2>
              <div id="countdown">2:00:00</div>

              <h2 className="firstScreenSection__form_top_title">
                <span className="firstScreenSection__form_top_title_span">
                  120uah
                </span>
                60uah
              </h2>
            </div>
            <input
              className="firstScreenSection__form_input"
              placeholder="Name"
              type="text"
            ></input>
            <InputMask
              mask="+38(099)999-99-99"
              className="firstScreenSection__form_input"
              placeholder="+38(0__)___-__-__"
            />
            <btn className="firstScreenSection__form_btn">ORDER</btn>
            <div id="today"> дата</div>
          </div>
        </div>
      </section>
    </>
  );
}
