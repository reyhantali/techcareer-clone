import React from "react";
import "./PageFooter.css";

const PageFooter = () => {
  return (
    <div className="pagefooter-container">
      <div className="pagefooter-content">
        <div className="pagefooter-box-one">
          <p>TECHCAREER</p>
          <a href="/about-us">Hakkımızda</a>
          <a href="/events">Etkinlikler</a>
          <a href="/sirketler-icin">Şirketler İçin</a>
          <a href="https://tr.techcareer.net/egitmen-basvurusu/">Eğitmen Ol</a>
          <a href="https://tr.techcareer.net/is-birligi/">İş Birliği</a>
          <a href="/contact">İletişim</a>
        </div>
        <div className="pagefooter-box-one">
          <p>BAŞVUR</p>
          <a href="/bootcamp">Bootcamp</a>
          <a href="/hackathon">Hackathon</a>
          <a href="/hiring-challenge">Hiring Challenge</a>
          <a href="/jobs">İş İlanları</a>
        
        </div>
        <div className="pagefooter-box-one">
          <p>SENİN İÇİN</p>
          <a href="/community">Komünite</a>
          <a href="https://tr.techcareer.net/community/techcareernet-developer-clubs">TDC</a>
          <a href="/blog">Blog</a>
          <a href="/podcast">Podcast</a>
          <a href="/kariyer-rehberi-fikirleri-ve-basamaklari">Kariyer Rehberi</a>
          <a href="/dictionary">Teknik Sözlük</a>
        </div>
        <div className="pagefooter-box-one">
          <p>VERİ POLİTİKAMIZ</p>
          <a href="/aydinlatma-metni">Aydınlatma Metni</a>
          <a href="/hizmet-sozlesmesi">Hizmet Sözleşmesi</a>
          <a href="/acik-riza-metni">Açık Rıza Metni</a>
          <a href="/cerez-politikasi">Çerez Politikası</a>
        
        </div>
        <div className="pagefooter-socialmedia">
          <img src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" />
          <p>Türkiye’nin teknoloji kariyeri platformu</p>
          <span>SOSYAL MEDYA</span>
          <div>
            <img
              src="https://www.techcareer.net/assets/images/footer/linkedin.svg"
              alt=""
            />
            <img
              src="https://www.techcareer.net/assets/images/footer/twitter.svg"
              alt=""
            />
            <img
              src="https://www.techcareer.net/assets/images/footer/instagram.svg"
              alt=""
            />
            <img
              src="https://www.techcareer.net/assets/images/footer/youtube.svg"
              alt=""
            />
            <img
              src="https://www.techcareer.net/assets/images/footer/facebook.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pagefooter-lang-container">
        <div className="pagefooter-lang">
          <span
            style={{
              color: "black",
            }}
          >
            TR
          </span>
          |<span>EN</span>
        </div>
        <div className="pagefooter-copyright">
          <span>Tüm hakları saklıdır</span>
          <span>© Copyright 2024</span>
          <span>support@techcareer.net</span>
        </div>
      </div>
      <div className="pagefooter-kariyer">
        <img
          src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=64&q=75"
          alt=""
        />
        <p>
          Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel
          İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında
          faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024
          tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet
          göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret
          alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için
          aşağıdaki telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu
          İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul
          Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26
        </p>
      </div>
    </div>
  );
};

export default PageFooter;
