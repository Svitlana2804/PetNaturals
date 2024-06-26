import "./ThirdScreen.scss";
import Doctor from "../../assets/doctor.webp";
export default function ThirdScreen() {
  return (
    <section className="thirdScreenSection">
      <h2 className="thirdScreenSection__title">Best Uses for Calming Chews</h2>
      <div className="thirdScreenSection__box">
        <div className="thirdScreenSection__box_text">
          <p className="thirdScreenSection__box_text_info">
            Car rides. Vet visits. Thunderstorms. Boarding. Parties. These are
            just a handful of times when Calming chews may come in handy. Does
            your dog hate to be left home alone? Does your cat love hiding under
            the bed? Serve up a Calming chew to help soothe your furry pal’s
            anxiety and make your life easier, too!
          </p>
          <p className="thirdScreenSection__box_text_info">
            For Best Results:
          </p>
          <p className="thirdScreenSection__box_text_info">
            We recommend administering Calming chews 30 minutes prior to a
            stressful event. The 30-minute activation period gives you a chance
            to increase dosage if you’re not seeing expected results. Calming is
            safe for unique stress inducing events and for long-term use to help
            manage everyday stress.
          </p>
        </div>
        <img
          className="thirdScreenSection__box_img"
          src={Doctor}
          alt="doctor"
        ></img>
      </div>
    </section>
  );
}
