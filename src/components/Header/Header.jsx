import React from "react";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <header className="toolbar">
      <div className="toolbar-container">
        <div className="logo">
          <img src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" />
        </div>
        <nav class="nav-menu">
          <input type="text" placeholder="Etkinlik, İş İlanı, Blog Ara" />
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "white",
                border: "none",
                color: "#333333",
                fontWeight: "500",
              }}
            >
              Etkinlikler
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a href="#">İş İlanları</a>
          <a href="#">
            <span className="point">●</span>
            Eğitimler
          </a>
          <a href="#">Komünite</a>
          <a href="#">Şirketler</a>
        </nav>
        <div className="buttons">
          <button className="login-btn">Giriş / Üye Ol</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
