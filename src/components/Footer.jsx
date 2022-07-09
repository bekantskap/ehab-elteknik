import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-content__box">
          <h2>Hitta hit</h2>
          <p>testgatan 22</p>
          <p>500 00</p>
          <p>Borås</p>
        </div>
        <div className="footer-content__box">
          <img className="footer-map" alt="karta" src={'img/map.png'} />
        </div>
        <div className="footer-content__box">
          <h2>Kontakt</h2>
          <p>033-123456</p>
          <p>Info@ehabelteknik.com</p>
          <img className="footer-logo" src={'img/logo.png'} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
