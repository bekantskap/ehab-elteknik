import React from 'react';

export default function ContactCard(props) {
  return (
    <section className="contact-card">
      <img src={props.img} alt={props.alt} className="contact-img" />
      <div className="contact-text">
        <h2 className="contact-name">{props.name}</h2>
        <div className="contact-logo">
          <i className="fa-solid fa-phone"></i>
          <p>{props.number}</p>
        </div>
        <div className="contact-logo">
          <i className="fa-solid fa-envelope"></i>
          <p>{props.email}</p>
        </div>
      </div>
    </section>
  );
}
