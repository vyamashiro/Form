import React from 'react';
import { Label } from './Labels.style';
import * as I from './Labels.types';

export const Labels = ({ id, htmlFor, text, className }: I.Labels) => <Label id={id} className={className} htmlFor={htmlFor}>{text}</Label>;
