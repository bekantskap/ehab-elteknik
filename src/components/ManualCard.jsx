import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../App';
import PageCount from './PageCount';

export default function ManualCard() {
  const x = useContext(SettingsContext);

  const businessDesc = {
    desc: 'EHAB Elteknik AB utvecklar och producerar elektronikkomponenter till projekt inom automation för flertalet industrier i hela världen, bl.a. shipment, bil- och processindustrin. Vi erbjuder även högkvalitativ teknisk support till våra kunder.',
    desc2:
      'Vi har långvarig erfarenhet och kompetens inom branschen och företaget erbjuder en service utöver den förväntade. Vi har hög flexibilitet i tillverkningsprocessen och använder oss av material som kan uppfylla de krav som ställs på den färdiga produkten.',
  };
  const policyDesc = {
    desc: 'För EHAB Elteknik är kundens tillfredsställelse det viktigaste. Vi vill kunna ge våra kunder en så bra produkt som möjligt vid överenskommen tid och till rätt pris samt ge dem den service och hjälp när helst de behöver den.',
    desc2:
      'EHABs verksamhet skall kännetecknas av kvalitet och miljömedvetenhet och vi skall erbjuda rätt sortiment med hög kvalitet.',
    desc3:
      'Långvariga samarbeten både internt och mot våra leverantörer, där erfarenhet och förtroende är utmärkande för relationerna, gör att vi kan upprätthålla den kvalitet som vi och våra kunder efterfrågar.',
    desc4:
      'Vi säkerställer att våra medarbetare efterföljer befintliga rutiner samt alltid prioriterar kvaliteten på produkterna. Vid tillverkning sker ständiga kontroller av förloppet av flera medarbetare för att kvaliteten på produkten skall vara så hög som möjligt.',
  };
  const companyDesc = {
    desc: 'EHAB Elteknik AB grundades 1972 av Bo G Mattsson under namnet Elektrotekniska Hjälpmedel BG Mattsson AB. Idén var från början att konstruera och producera elektriska rullstolar och proteser för sjukvården. Så tidigt som 1979 började vi ägna åt oss vår nuvarande verksamhet och därmed blev vi innovatörer inom branschen och ett av de första företagen i Sverige inom automation. Idag är företaget beläget på Brämhult i Borås och har fem anställda samt en inhyrd tjänst för administration.',
  };
  const qualityDesc = {
    desc: 'Utrustning och anläggning kontrolleras och mätinstrument kalibreras med jämna intervall för att uppnå den nödvändiga precisionen inom verksamheten. Vid produktframtagning säkerställs att våra komponenter för projekten uppfyller maskindirektivet.',
    desc2:
      'EHABs huvudprocess omfattar alla aktiviteter från offert till leverans. Denna exekveras rutinmässigt vid tillverkning och innefattar alla aktiviteter, ansvar, genomförande samt kontroller. Arbetsbeskrivningar för utförande av projekt existerar. Stödprocesser till huvudprocessen är ekonomi, reklamation, kundkontakter, teknisk service/support och IT.',
    desc3:
      'Genom att tydligt definiera de enskilda medarbetarnas ansvarsområden eliminerar vi riskerna för att fel uppstår. Hantering av avvikelser dokumenteras fortlöpande och för att förhindra upprepandet av samma fel skall orsaken utredas samt åtgärdas på ett sådant sätt att felet inte uppstår igen.',
    desc4:
      'Val av underleverantörer sker baserat på deras tidigare förmåga att till marknadsmässiga priser uppfylla ställda krav. Leverantörernas produkter skall vara godkända enligt de krav som CE-märkning kräver. EHAB Elteknik AB arbetar för långsiktiga relationer med såväl leverantörer som kunder. Detta underlättar för att upprätthålla hög kvalitet på EHABs produkter. Beställning kan göras skriftligt, per fax eller via telefon. Order skall alltid bekräftas skriftligt. Allt inkommande gods kontrolleras vid ankomst. Vid felaktig eller skadad leverans vidtas nödvändiga åtgärder och godset ställs undan i avvaktan på åtgärd.',
  };

  const organisationDesc = {
    desc: 'Företagsledningen på EHAB består av Verkställande Direktör (VD), som även handhar kundkontakter och försäljning samt är personal- och leverantörsansvarig. Produktionsansvarig styr produktionen samt är fakturaansvarig tillsammans med VD. Konstruktions- och utvecklingsansvarig styr upp nystartade projekt. Tillsammans är dessa tre även ansvariga för projekthandläggning.',
    desc2:
      'Ansvarig för kvalitetsarbetet och dess utveckling och uppföljning är VD. VD har åtagit sig att informera medarbetare om kvalitetsarbetet och se till att det följs i verksamheten. VD ansvarar även för att nya kvalitetsmål sätts upp när de nuvarande är uppfyllda. För att ytterligare kunna styra upp utvecklingen på företaget tar VD även hjälp av företagets två styrelseledamöter som består av produktionsansvarig samt konstruktions- och utvecklingsansvarig.',
  };

  useEffect(() => {
    console.log(x.manualDesc);
    x.setShowDesc({ desc1: true, desc2: false, desc3: false, desc4: false });
    switch (x.manualTitle) {
      case 'Affärsidé':
        return x.setManualDesc(businessDesc);
      case 'Kvalitetspolicy':
        return x.setManualDesc(policyDesc);
      case 'Företaget':
        return x.setManualDesc(companyDesc);
      case 'Kvalitetsmål':
        return x.setManualDesc(qualityDesc);
      case 'Organisationen':
        return x.setManualDesc(organisationDesc);

      default:
        return;
    }
  }, [x.manualTitle]);

  return (
    <section className="manual-text__content">
      <div className="manual-text__box">
        <p>{x.manualDesc.title}</p>
        <p className={` ${x.showDesc.desc1 ? 'show' : 'hide'}`}>
          {x.manualDesc.desc}
        </p>
        <p className={` ${x.showDesc.desc2 ? 'show' : 'hide'}`}>
          {x.manualDesc.desc2}
        </p>
        <p className={` ${x.showDesc.desc3 ? 'show' : 'hide'}`}>
          {x.manualDesc.desc3}
        </p>
        <p className={` ${x.showDesc.desc4 ? 'show' : 'hide'}`}>
          {x.manualDesc.desc4}
        </p>
      </div>
      <div className="manual-page__count">
        {Object.values(x.manualDesc).map((props, key) => (
          <PageCount props={props} id={key} />
        ))}
        {/* <p className="page-count active">1</p>
        <p className="page-count">2</p>
        <p className="page-count">3</p> */}
      </div>
    </section>
  );
}
