import React, { useState } from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../App';

export default function PageCount(props) {
  const x = useContext(SettingsContext);

  const [activePage, setActivePage] = useState(1);
  const descId = props.id + 1;

  const changeHandler = () => {
    console.log(activePage);
    console.log(descId);
    setActivePage(descId);
    x.setShowDesc({
      desc1: false,
      desc2: false,
      desc3: false,
      desc4: false,
    });
    switch (descId) {
      case 1:
        return x.setShowDesc({ desc1: true });
      case 2:
        return x.setShowDesc({ desc2: true });
      case 3:
        return x.setShowDesc({ desc3: true });
      case 4:
        return x.setShowDesc({ desc4: true });

      default:
    }
  };

  return (
    <p
      onClick={() => changeHandler()}
      className={`page-count ${activePage === descId ? 'active' : ''}`}
    >
      {descId}
    </p>
  );
}
