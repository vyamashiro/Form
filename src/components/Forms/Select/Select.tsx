import React from 'react';
// import { Input } from './InputText.styles';
import * as I from './Select.types';

export const Select = ({ id, name, defaultOption = "", options, onChange}: I.Select) => {
  return(
    <select id={id} name={name} onChange={onChange}>
      <option value={defaultOption}>{defaultOption}</option>
      {options?.map((option) => {
        return <option value={option}>{option}</option>
      })}
    </select>
  )
};
