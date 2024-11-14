import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-title">
        <h2>Neden Techcareer.net?</h2>

        <div className="footer-box-container">
          <div className="footer-box">
            <div className="footer-img">
              <img src="https://www.techcareer.net/assets/images/infobar/why-tcn-icon1.svg" />
            </div>
            <h3 className="footer-box-title">Ücretsiz etkinliklere katıl</h3>
            <p className="footer-box-text">
              Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken
              tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile
              başlayacaksın.
            </p>
          </div>

          <div className="footer-box">
            <div className="footer-img">
              <img src="https://www.techcareer.net/assets/images/infobar/why-tcn-icon2.svg" />
            </div>
            <h3 className="footer-box-title">Kendini kanıtla</h3>
            <p className="footer-box-text">
              Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak
              hem becerilerini geliştirecek hem de ödül kazanma fırsatı
              yakalayacaksın.
            </p>
          </div>

          <div className="footer-box">
            <div className="footer-img">
              <img src="https://www.techcareer.net/assets/images/infobar/why-tcn-icon3.svg" />
            </div>
            <h3 className="footer-box-title">İş fırsatı yakala</h3>
            <p className="footer-box-text">
              Sektöründe lider teknoloji şirketleriyle tanışacak ve iş
              fırsatları yakalayacaksın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default footer;
