import React from 'react';
import { Input } from './InputText.styles';
import * as I from './InputText.types';
import { forwardRef } from 'react';

export const InputText = forwardRef(({
  id,
  name,
  placeholder,
  ariaLabel,
  value,
  maxLength = 100,
  pattern,
  title,
  required = false,
  dataTest,
  ...props
}: I.InputText, ref): any => {
  return(
    <Input
      id={id}
      name={name}
      type={'text'}
      data-test={dataTest}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      maxLength={maxLength}
      pattern={pattern}
      title={title}
      required={required}
      ref={ref}
      {...props}
    />
  )
});
