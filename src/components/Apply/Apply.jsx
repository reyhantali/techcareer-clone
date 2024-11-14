import React from "react";
import "./Apply.css";

const Apply = () => {
  return (
    <div className="applies-container">
      <div className="apply-content">
        <div className="apply-box">
          <img src="https://www.techcareer.net/assets/images/eventsbar/eventsbar-bootcamp.svg" />
          <h2>Bootcamp</h2>
          <p>
            Bootcamp etkinlikleri, yazılım teknolojileri, veri bilimi, ürün
            yönetimi gibi teknolojik konularda düzenlenir. Hem eğitim alabilir,
            hem de o alanda işe başlayabilecek kadar fazla bilgi ve donanım
            kazanabilirsin.
          </p>
          <button>Hemen Başvur</button>
        </div>
        <div className="apply-box">
          <img src="https://www.techcareer.net/assets/images/eventsbar/eventsbar-hackathon.svg" />
          <h2>Hackathon</h2>
          <p>
            Hackathon etkinliklerinde takımlar halinde veya bireysel olarak
            yarışacaksın. Etkinlik için belli bir zaman verilir ve yeni
            fikirler, yeni dijital ürünler üretmesi, sonra da bunları kodlaması
            istenir.
          </p>
          <button>Hemen Başvur</button>
        </div>
        <div className="apply-box">
          <img src="https://www.techcareer.net/assets/images/eventsbar/eventsbar-hiring.svg" />
          <h2>Hiring Challenge</h2>
          <p>
            Hiring Challenge yarışmalarında Android, iOS, algoritma veya kod
            hatası gibi problemleri belirli bir zaman aralığı içerisinde çözmeye
            çalışacaksın. Bu yarışmalarda algoritma tasarımına, özgünlüğe ve kod
            kalitesine göre puan alırsın.
          </p>
          <button>Hemen Başvur</button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
