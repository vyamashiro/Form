import React from 'react';
import { Input } from './IInputPhone.styles';
import * as I from './InputPhone.types';

export const InputPhone = ({
  id,
  name,
  placeholder,
  ariaLabel,
  value,
  maxLength = 100,
  pattern,
  title,
  required = false,
}: I.InputPhone) => {
  return(
    <Input
      id={id}
      name={name}
      type={'tel'}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      maxLength={maxLength}
      pattern={pattern}
      title={title}
      required={required}
    />
  )
};
