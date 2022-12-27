import React from 'react';
import { Input } from './InputText.styles';
import * as I from './InputText.types';

export const InputText = ({
  id,
  name,
  placeholder,
  ariaLabel,
  value,
  maxLength = 100,
  pattern,
  title,
  required = false,
}: I.InputText) => {
  return(
    <Input
      id={id}
      name={name}
      type={'text'}
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
