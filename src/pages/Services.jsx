import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <main className="services-container">
      <h1 className="services-title">VÅRA TJÄNSTER</h1>
      <div className="services-cards">
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/industryaut.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/machine.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/programming.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/security.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/industryaut.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/machine.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/programming.jpg'}
        />
        <ServiceCard
          service={'Test'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/security.jpg'}
        />
      </div>
      <section className="service-info__container">
        <div className="service-info">
          <h4 className="service-info__text">
            Vill du veta mer om vårat företag och våra riktlinjer?
          </h4>
          <i className="fa-solid fa-arrow-down"></i>
          <Link to="/manual">
            <button type="button" className="service-info__btn">
              kvalitetsmanual
            </button>
          </Link>
        </div>
        <div className="service-info">
          <Link to="/signs">
            <button type="button" className="service-info__btn">
              SKyltar
            </button>
          </Link>
          <i className="fa-solid fa-arrow-up"></i>
          <h4 className="service-info__text">
            Vill du se exempel på specialbeställda skyltar eller beställa?
          </h4>
        </div>
      </section>
    </main>
  );
}
