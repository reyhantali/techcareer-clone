import React from "react";
import "./Lower.css";

const lower = () => {
  return (
    <div className="lower-container">
      <div className="lower-content">
        <div className="lower-box">
          <div>
            <h4 className="lower-title">Kariyer Rehberi’yle Geliş</h4>
            <div className="lower-titlee">
              Yeni teknoloji kariyerini seçmeye hazır mısın?
            </div>
          </div>

          <div className="lower-text">
            Teknoloji alanında kariyer yapmak istiyor ancak hangi pozisyonu
            seçeceğini veya seçtiğin pozisyonda hangi adımlardan geçmen
            gerektiğini bilmiyorsan, Kariyer Rehberi ile en doğru yerdesin!
            <a
              className="lower-link"
              href="https://www.techcareer.net/kariyer-rehberi-fikirleri-ve-basamaklari"
            >
              Hemen İncele
            </a>
          </div>
        </div>
        <div className="lower-img">
          <img src="https://www.techcareer.net/assets/images/pages/careerGuide/common/cta-bg-desktop.svg" />
        </div>
      </div>
    </div>
  );
};

export default lower;
