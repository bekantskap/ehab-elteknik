import React from 'react';
import ManualBtn from '../components/ManualBtn';
import ManualCard from '../components/ManualCard';

export default function Manual() {
  return (
    <main className="manual-container">
      <div className="manual-content">
        <section className="manual-box">
          <div className="manual-btns">
            <ManualBtn title={'Affärsidé'} />
            <ManualBtn title={'Kvalitetspolicy'} />
            <ManualBtn title={'Företaget'} />
            <ManualBtn title={'Kvalitetsmål'} />
            <ManualBtn title={'Organisationen'} />
          </div>
          <ManualCard />
        </section>
      </div>
    </main>
  );
}
