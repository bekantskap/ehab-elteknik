import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main className="services-container">
      <h1 className="services-title">VÅRA TJÄNSTER</h1>
      <div className="services-cards">
        <ServiceCard
          service={'Industriautomation'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/industryaut.jpg'}
        />
        <ServiceCard
          service={'Maskininstallation'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/machine.jpg'}
        />
        <ServiceCard
          service={'Programmering'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/programming.jpg'}
        />
        <ServiceCard
          service={'Säkerhetssystem'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/security.jpg'}
        />
        <ServiceCard
          service={'Komponenter'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/components.jpg'}
        />
        <ServiceCard
          service={'PLC och Motorstyrningar'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/plc.jpg'}
        />
        <ServiceCard
          service={'Varvtalsreglering'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg'}
        />
        <ServiceCard
          service={'Drifttagning'}
          desc={'Lorem ipsum testing stuff'}
          img={'img/thisisengineering-raeng-xYCBw1uIP_M-unsplash (1).jpg'}
        />
      </div>
      {/* <section className="service-banner__container">
        <img
          className="service-banner__image"
          src={'img/engraving.jpg'}
          alt="graveringsmaskin"
        />
      </section> */}
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
