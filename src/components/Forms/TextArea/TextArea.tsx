import React from 'react';
import { TextArea } from './TextArea.styles';
import * as I from './TextArea.types';

export const TextAreaComponent = ({ placeholder, rows, cols, maxLength }: I.TextArea) => {
  return(
    <TextArea 
      placeholder={placeholder} 
      rows={rows} 
      cols={cols} 
      maxLength={maxLength}
    />
  )
};
