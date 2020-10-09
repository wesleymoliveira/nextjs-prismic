import React from 'react';

import { StyledInput } from './styles';

interface InputProps {
  type: string ;
  value: string;
  placeholder: string
  onChange: any;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  children,
}) => (
  <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder}>
    {children}
  </StyledInput>
  );
export default Input;