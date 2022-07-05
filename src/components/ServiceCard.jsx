import React from 'react';

export default function ServiceCard(props) {
  return (
    <section className="service-card__container">
      <div className="service-card__content">
        <img className="service-card__img" src={props.img} alt={props.alt} />
        <div className="service-card__text">
          <h2>{props.service}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </section>
  );
}
