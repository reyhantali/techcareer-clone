import React from "react";
import "./Activity.css";

const Activity = () => {
  return (
    <header>
      <div className="activity">
        <h1 className="card-title">Başvurunu Bekleyen Etkinlikler</h1>
        <div className="activity-container">
          <div className="card-box">
            <img src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1200x628_70_1c8be65ed6%2F1200x628_70_1c8be65ed6.png&w=384&q=75" />
            <h3 className="activity-title"> UnityCraft Workshop</h3>
            <p className="activity-section">
              Ücretsiz öğren, mezun ol, iş fırsatı yakala!
            </p>
            <div className="tag-container">
              <span>Bootcamp</span>
              <span>İş Fırsatı</span>
            </div>
            <div className="card-box-footer">
              <div className="apply-container">
                <span className="apply-label">SON BAŞVURU:</span>
                <span className="apply-date">15.11.2024</span>
              </div>
              <button className="apply-btn">Başvur</button>
            </div>
          </div>

          <div className="card-box">
            <img src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FFMSS_Bilisim_Android_Bootcamp_336x180_a109cd4ab2%2FFMSS_Bilisim_Android_Bootcamp_336x180_a109cd4ab2.png&w=384&q=75" />
            <h3 className="activity-title">
              {" "}
              FMSS Bilişim Android Development Bootcamp with Jetpack
            </h3>
            <p className="activity-section">
              Ücretsiz Bootcamp'e katıl, Jr. Android Developer ol!
            </p>
            <div className="tag-container">
              <span>Bootcamp</span>
              <span>İş Fırsatı</span>
            </div>

            <div className="card-box-footer">
              <div className="apply-container">
                <span className="apply-label">SON BAŞVURU:</span>
                <span className="apply-date">15.11.2024</span>
              </div>
              <button className="apply-btn">Başvur</button>
            </div>
          </div>

          <div className="card-box">
            <img src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fluxoft_hackathon_1200x628_35bf3f2190%2Fluxoft_hackathon_1200x628_35bf3f2190.png&w=384&q=75" />
            <h3 className="activity-title"> Luxoft Parking Hackathon</h3>
            <p className="activity-section">
              Yarış, Kazan, Luxoft'ta Staj Yap!
            </p>
            <div className="tag-container">
              <span>Hackathon</span>
              <span>İş Fırsatı</span>
            </div>
            <div className="card-box-footer">
              <div className="apply-container">
                <span className="apply-label">SON BAŞVURU:</span>
                <span className="apply-date">15.11.2024</span>
              </div>
              <button className="apply-btn">Başvur</button>
            </div>
          </div>
        
        </div>
        <div className="events-btn">
            <span>Tüm Etkinlikleri Gör</span>
          </div>
      </div>
    </header>
  );
};

export default Activity;
