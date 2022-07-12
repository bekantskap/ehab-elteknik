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
      <div className="service-info">
        <button type="button" className="info-page__btn">
          Kvalitetsmanual
        </button>
      </div>
    </main>
  );
}
