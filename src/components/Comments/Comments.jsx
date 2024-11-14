import React from "react";
import "./Comments.css";
import Carousel from "react-bootstrap/Carousel";

const Comments = () => {
  return (
    <div className="comments-container">
      <div className="comments-content">
        <h1 className="container-header">Bizi Katılımcılarımızdan Dinle</h1>
        <div className="comments-slider-container">
          <div className="user-comments">
            <img
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FCansel_Basak_09462f71c1%2FCansel_Basak_09462f71c1.jpg&w=256&q=100"
              alt=""
            />
            <div className="comments-info">
              <p className="comments-desc">
                Herkesi tanıdığıma ve böyle bir eğitimi deneyimlediğime çok
                memnunum. Süreç oldukça verimli ve eğlenceli geçti. Eğlenerek
                öğrendik diyebilirim
              </p>
              <div className="title-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#00C26D"
                    d="M19.364 11.271c.038.503.038.927.116 1.391a11.45 11.45 0 0 0 1.854 4.945c.463.734 1.043 1.352 1.66 1.931.619.54 1.275 1.043 2.01 1.43.193.115.424.193.618.308.116.039.193.116.309.155.425.154.85.309 1.274.425.116.038.232.038.348.077.386.077.54-.425.232-.618-.078-.039-.155-.116-.27-.154-.31-.194-.58-.425-.85-.657a3.5 3.5 0 0 0-.387-.348 3.5 3.5 0 0 1-.348-.386c-.463-.502-.811-1.082-1.12-1.661-.309-.58-.502-1.198-.656-1.816-.039-.116-.039-.231-.078-.309-.038-.193.116-.386.348-.386h4.906a3.67 3.67 0 0 0 3.67-3.67V5.67A3.67 3.67 0 0 0 29.33 2h-6.258a3.67 3.67 0 0 0-3.67 3.67v4.017c0 .193 0 .425-.038.618v.966M3 11.271c.039.503.039.927.116 1.391a11.45 11.45 0 0 0 1.854 4.945c.464.734 1.043 1.352 1.661 1.931.618.54 1.275 1.043 2.009 1.43.193.115.425.193.618.308.116.039.193.116.31.155.424.154.849.309 1.274.425.116.038.232.038.347.077.387.077.541-.425.232-.618-.077-.039-.154-.116-.27-.154-.31-.194-.58-.425-.85-.657a3.5 3.5 0 0 0-.387-.348 3.5 3.5 0 0 1-.347-.386c-.464-.502-.812-1.082-1.12-1.661-.31-.58-.503-1.198-.657-1.816-.039-.116-.039-.231-.077-.309-.039-.193.115-.386.347-.386h4.907a3.67 3.67 0 0 0 3.67-3.67V5.67A3.67 3.67 0 0 0 12.966 2H6.708a3.67 3.67 0 0 0-3.67 3.67v4.017c0 .193 0 .425-.038.618v.966"
                  ></path>
                </svg>
                <div className="user-info-container">
                  <span className="comments-user-name">Cansel Başak</span>
                  <span className="comments-user-title">
                    Tech Recruitment Bootcamp
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="user-comments">
            <img
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FMelike_Aydin_d81bfb3098%2FMelike_Aydin_d81bfb3098.png&w=256&q=100"
              alt=""
              className="comments-img"
            />
            <div className="comments-info">
              <p className="comments-desc">
                Bu süreçte, benim için en değerli olan şey, programın kolektif
                çalışma ortamıydı. Kendimi genellikle bağımsız bir öğrenici
                olarak görsem de, diğer katılımcıların kararlılığı ve tutkusu
                beni derinden etkiledi ve motivasyonumu artırdı.
              </p>
              <div className="title-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#00C26D"
                    d="M19.364 11.271c.038.503.038.927.116 1.391a11.45 11.45 0 0 0 1.854 4.945c.463.734 1.043 1.352 1.66 1.931.619.54 1.275 1.043 2.01 1.43.193.115.424.193.618.308.116.039.193.116.309.155.425.154.85.309 1.274.425.116.038.232.038.348.077.386.077.54-.425.232-.618-.078-.039-.155-.116-.27-.154-.31-.194-.58-.425-.85-.657a3.5 3.5 0 0 0-.387-.348 3.5 3.5 0 0 1-.348-.386c-.463-.502-.811-1.082-1.12-1.661-.309-.58-.502-1.198-.656-1.816-.039-.116-.039-.231-.078-.309-.038-.193.116-.386.348-.386h4.906a3.67 3.67 0 0 0 3.67-3.67V5.67A3.67 3.67 0 0 0 29.33 2h-6.258a3.67 3.67 0 0 0-3.67 3.67v4.017c0 .193 0 .425-.038.618v.966M3 11.271c.039.503.039.927.116 1.391a11.45 11.45 0 0 0 1.854 4.945c.464.734 1.043 1.352 1.661 1.931.618.54 1.275 1.043 2.009 1.43.193.115.425.193.618.308.116.039.193.116.31.155.424.154.849.309 1.274.425.116.038.232.038.347.077.387.077.541-.425.232-.618-.077-.039-.154-.116-.27-.154-.31-.194-.58-.425-.85-.657a3.5 3.5 0 0 0-.387-.348 3.5 3.5 0 0 1-.347-.386c-.464-.502-.812-1.082-1.12-1.661-.31-.58-.503-1.198-.657-1.816-.039-.116-.039-.231-.077-.309-.039-.193.115-.386.347-.386h4.907a3.67 3.67 0 0 0 3.67-3.67V5.67A3.67 3.67 0 0 0 12.966 2H6.708a3.67 3.67 0 0 0-3.67 3.67v4.017c0 .193 0 .425-.038.618v.966"
                  ></path>
                </svg>
                <div className="user-info-container">
                  <span className="comments-user-name">Esra Çakmak</span>
                  <span className="comments-user-title">
                    Data Science Bootcamp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comments-btn-container">
          <button className="comments-btn">Tüm Yorumları Gör</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
