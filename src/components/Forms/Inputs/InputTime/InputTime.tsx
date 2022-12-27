import React from 'react';
import { Input } from './InputTime.styles';
import * as I from './InputTime.types';

export const InputTime = ({ ariaLabel, id, name }: I.InputTime ) => {
  return(
    <Input 
      type="time"
      aria-label={ariaLabel}
      id={id}
      name={name}
    />
  )
};
