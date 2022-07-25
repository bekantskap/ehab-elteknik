import ContactCard from '../components/ContactCard';

export default function Contact() {
  return (
    <main className="contact-container">
      <h1 className="contact-header">Kontakt</h1>
      <div className="contact-content">
        <ContactCard
          img={'img/classe2.jpg'}
          alt={'classe'}
          name={'Claes Mattsson'}
          number={'07000000'}
          email={'info@ehabelteknik.com'}
        />
        <ContactCard
          img={'img/anders.jpg'}
          alt={'Anders Mattsson'}
          name={'Anders Mattsson'}
          number={'07000000'}
          email={'info@ehabelteknik.com'}
        />
        <ContactCard
          img={'img/ehabLogga.png'}
          alt={'ehab logga'}
          name={'Ehab Elteknik'}
          number={'033-123456'}
          email={'info@ehabelteknik.com'}
        />
      </div>
    </main>
  );
}
