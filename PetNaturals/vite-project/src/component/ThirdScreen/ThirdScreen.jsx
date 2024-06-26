import "./ThirdScreen.scss";
import Doctor from "../../assets/doctor.webp";
export default function ThirdScreen() {
  return (
    <section className="thirdScreenSection" id='section3'>
      <h2 className="thirdScreenSection__title">Best Uses for Calming Chews</h2>
      <div className="thirdScreenSection__box">
        <div className="thirdScreenSection__box_text">
          <svg viewBox="0 0 250 250" className="thirdScreenSection__svg">
            <polygon
              points="10,190 310,190 360,100 310,10 10,10"
              className="thirdScreenSection__polygon"
            />
            <foreignObject x="20" y="20" width="760" height="360">
              <p className="thirdScreenSection__box_text_info">
                Car rides. Vet visits. Thunderstorms. Boarding. Parties. These
                are just a handful of times when Calming chews may come in
                handy. Does your dog hate to be left home alone? Does your cat
                love hiding under the bed? Serve up a Calming chew to help
                soothe your furry pal’s anxiety and make your life easier, too!
                <br></br>
                For Best Results:<br></br>
                We recommend administering Calming chews 30 minutes prior to a
                stressful event. The 30-minute activation period gives you a
                chance to increase dosage if you’re not seeing expected results.
                Calming is safe for unique stress inducing events and for
                long-term use to help manage everyday stress.
              </p>
            </foreignObject>
          </svg>
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
