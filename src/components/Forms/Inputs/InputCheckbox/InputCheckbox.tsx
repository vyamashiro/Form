import React from 'react';
import * as I from './InputCheckbox.types';

export const InputCheckbox = ({ id, name, value, label, isChecked }: I.InputCheckbox) => {
  return(
    <div>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        checked={isChecked}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
};
