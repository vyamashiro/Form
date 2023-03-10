import React from 'react';
import { Input } from './InputPassword.style';
import * as I from './InputPassword.types';

export const InputPassword = ({id, className, name, placeholder, ariaLabel, value, pattern, maxLength}: I.InputPassword) => {
  return(
    <Input
      type="password"
      id={id}
      className={className}
      name={name}
      placeholder={placeholder}
      pattern={pattern}
      aria-label={ariaLabel}
      value={value}
      maxLength={maxLength}
    />
  )
};
