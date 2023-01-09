import React from 'react';
import { Input } from './InputURL.styles';
import * as I from './InputURL.types';

export const InputURL = ({ ariaLabel, id, name, placeholder, pattern, minLength, maxLength, readOnly, size, value, required }: I.InputURL ) => {
  return(
    <Input 
      type="url"
      aria-label={ariaLabel}
      id={id}
      name={name}
      placeholder={placeholder}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      readOnly={readOnly}
      size={size}
      value={value}
      required={required}
    />
  )
};
