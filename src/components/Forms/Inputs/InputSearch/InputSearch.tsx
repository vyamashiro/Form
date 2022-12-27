import React from 'react';
import { Input } from './InputSearch.styles';
import * as I from './InputSearch.types';

export const InputSearch = ({ ariaLabel, className, id, name, placeholder, maxLength }: I.InputSeach ) => {
  return (
    <Input
      type="search"
      id={id}
      name={name}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={className}
      maxLength={maxLength}
    />
  )
}