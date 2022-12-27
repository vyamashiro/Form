import React from 'react';
import * as I from './InputRadio.types';

export const InputRadio = ({ id, name }: I.InputRadio) => {
  return(
    <input 
      type="radio" 
      id={id}
      name={name}
    />
  )
};
