import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../App';

export default function ManualBtn(props) {
  const x = useContext(SettingsContext);
  const [activeBtn, setActiveBtn] = useState(false);

  const changeHandler = () => {
    x.setManualTitle(props.title);
    setActiveBtn(true);
  };

  return (
    <button
      onClick={() => changeHandler()}
      className={`manual-topic__btn ${activeBtn ? 'active-button' : ''}`}
    >
      {props.title}
    </button>
  );
}
