import React from 'react';
import { Input } from './InputDate.style';
import * as I from './InputDate.types';

export const InputDate = ({ id, name, ariaLabel, min, max, pattern }: I.InputDate) => {
  return(
    <Input
      type="date"
      id={id}
      name={name}
      aria-label={ariaLabel}
      min={min}
      max={max}
      pattern={pattern}
    />
  )
};
