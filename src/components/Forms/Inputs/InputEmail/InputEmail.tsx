import React from 'react';
import { Input } from './InputEmail.styles';
import * as I from './InputEmail.types';

export const InputEmail = ({
  id,
  name,
  className,
  placeholder,
  ariaLabel,
  value,
  pattern,
  maxLength = 100,
}: I.InputEmail) => {

  return(
    <Input
      type="email"
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      pattern={pattern}
      aria-label={ariaLabel}
      value={value}
      maxLength={maxLength}
    />
  )
};
