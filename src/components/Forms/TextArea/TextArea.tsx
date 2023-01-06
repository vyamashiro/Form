import React from 'react';
import { useForm } from "react-hook-form";
import { TextArea } from './TextArea.styles';
import * as I from './TextArea.types';

export const TextAreaComponent = ({ placeholder, rows, cols, maxLength }: I.TextArea) => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({});

  return(
    <TextArea 
      placeholder={placeholder} 
      rows={rows} 
      cols={cols} 
      maxLength={maxLength}
      {...register('name', { required: 'input manager name' })} 
    />
  )
};
