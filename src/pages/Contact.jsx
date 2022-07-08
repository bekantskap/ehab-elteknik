export default function Contact() {
  return (
    <main className="contact-container">
      <h1>Kontakt</h1>
      <div className="contact-content">
        <section className="contact-card">
          <img src={'img/classe2.jpg'} alt="classe" className="contact-img" />
          <div className="contact-text">
            <h2 className="contact-name">Claes Mattsson</h2>
            <div className="contact-logo">
              <i className="fa-solid fa-phone"></i>
              <p>07000000</p>
            </div>
            <div className="contact-logo">
              <i class="fa-solid fa-envelope"></i>
              <p>info@ehabelteknik</p>
            </div>
          </div>
        </section>
        <section className="contact-card">
          <img src={'img/anders.jpg'} alt="anders" className="contact-img" />
          <div className="contact-text">
            <h2 className="contact-name">Anders Mattsson</h2>
            <div className="contact-logo">
              <i className="fa-solid fa-phone"></i>
              <p>07000000</p>
            </div>
            <div className="contact-logo">
              <i class="fa-solid fa-envelope"></i>
              <p>info@ehabelteknik</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
