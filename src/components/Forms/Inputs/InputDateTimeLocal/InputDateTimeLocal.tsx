import React from 'react';
import { Input } from './InputDateTimeLocal.style';
import * as I from './InputDateTimeLocal.types';

export const InputDateTimeLocal = ({ id, name, ariaLabel }:  I.InputDateTimeLocal ) => {

  return(
    <Input
      type="datetime-local" 
      id={id}
      name={name}
      aria-label={ariaLabel}
    />
  )
};
