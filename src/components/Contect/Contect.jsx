import React from "react";
import "./Contect.css";

const Contect = () => {
  return (
    <div className="contect-container">
      <div className="contect-content">
        <h2>Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?</h2>
        <span>
          Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail
          adresinizi girin! 🚀
        </span>
        <div className="input-container">
          <input placeholder="Şirket E-Mail Adresiniz" type="email" />
          <button>Gönder</button>
        </div>

        <p className="contect-text">Tüm soru ve önerileriniz için;</p>
        <div className="contect-communication">
          <p>hello@techcareer.net</p>|
          <p>0216 468 76 00</p>
        </div>
      </div>
    </div>
  );
};

export default Contect;
